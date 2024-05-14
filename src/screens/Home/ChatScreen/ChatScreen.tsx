import { typoColor } from '@constants/appColors';
import useRootContext from '@hooks/useRootContext';
import globalStyle from '@styles/globalStyle';
import { DirectRight, More2 } from 'iconsax-react-native';
import { isEmpty } from 'lodash';
import React, { useEffect, useRef, useState } from 'react';
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import MessageItem, { Message } from './ChatScreenItem/MessageItem';

const ChatScreen: React.FC = () => {
  const { state } = useRootContext();
  const { currentUser } = state.auth;
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hi There I Want to talk to you! ',
      time: '14:00',
      user: { id: 11, email: 'trungkiennguyen@gmail.com', avatar: { uri: 'https://example.com/avatar1.png' } }
    }
  ]);
  const [inputText, setInputText] = useState('');
  const flatListRef = useRef<FlatList<Message>>(null);

  useEffect(() => {
    // Scroll to the end of the list when messages change
    flatListRef.current?.scrollToEnd({ animated: true });
  }, [messages]);

  const sendMessage = () => {
    if (inputText.trim()) {
      const newMessage: Message = {
        id: Date.now().toString(),
        text: inputText,
        time: new Date().toLocaleTimeString().slice(0, 5),
        user: {
          id: currentUser.id || 14,
          email: currentUser.email || 'trungkiennguyen0310@gmail.com',
          avatar: { uri: 'https://example.com/yourAvatar.png' }
        }
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setInputText('');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={[globalStyle.container, styles.keyboardAvoidingContainer]}
      keyboardVerticalOffset={165}
    >
      <SafeAreaView style={globalStyle.container}>
        <FlatList
          ref={flatListRef}
          data={messages}
          renderItem={({ item }) => <MessageItem message={item} />}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.messagesContainer}
          keyboardShouldPersistTaps='handled'
        />
        <View style={styles.inputContainer}>
          <TouchableOpacity>
            <More2 style={{ padding: 10 }} size='35' color={typoColor.yellow1} variant='Bold' />
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            value={inputText}
            onChangeText={setInputText}
            placeholder='Nhập tin nhắn...'
            onSubmitEditing={sendMessage}
          />
          <TouchableOpacity disabled={isEmpty(TextInput)} onPress={sendMessage}>
            <DirectRight style={styles.sendButton} variant='Bold' size='35' color={typoColor.yellow1} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  keyboardAvoidingContainer: {
    flex: 1
  },
  messagesContainer: {
    flexGrow: 1,
    justifyContent: 'flex-end'
  },

  inputContainer: {
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderRadius: 20,
    borderColor: typoColor.gray5,
    backgroundColor: typoColor.white1,
    height: 70,
    marginBottom: -30
  },
  input: {
    flex: 1,
    padding: 10,
    borderRadius: 20,
    backgroundColor: typoColor.white1,
    color: typoColor.black1,
    marginRight: 8
  },
  sendButton: {
    marginRight: 20
  }
});

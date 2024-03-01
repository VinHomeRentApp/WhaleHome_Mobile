import { typoColor } from '@constants/appColors';
import globalStyle from '@styles/globalStyle';
import React, { useState, useRef, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
  ImageSourcePropType,
  KeyboardAvoidingView,
  Platform,
  Keyboard
} from 'react-native';

interface User {
  avatar: ImageSourcePropType;
}

interface Message {
  id: string;
  text: string;
  time: string;
  user: User;
}

interface AvatarProps {
  source: ImageSourcePropType;
}

const Avatar: React.FC<AvatarProps> = ({ source }) => <Image source={source} style={styles.avatar} />;

interface MessageItemProps {
  message: Message;
}

const MessageItem: React.FC<MessageItemProps> = ({ message }) => (
  <View style={styles.messageRow}>
    <Avatar source={message.user.avatar} />
    <View style={styles.messageBubble}>
      <Text style={styles.messageText}>{message.text}</Text>
      <Text style={styles.messageTime}>{message.time}</Text>
    </View>
  </View>
);

const ChatScreen: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', text: 'Xin chào!', time: '14:00', user: { avatar: { uri: 'https://example.com/avatar1.png' } } }
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
        user: { avatar: { uri: 'https://example.com/yourAvatar.png' } } // Thay đổi avatar của bạn ở đây
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
          <TextInput
            style={styles.input}
            value={inputText}
            onChangeText={setInputText}
            placeholder='Nhập tin nhắn...'
            onSubmitEditing={sendMessage}
          />
          <TouchableOpacity onPress={sendMessage}>
            <Text style={styles.sendButton}>Gửi</Text>
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
  messageRow: {
    flexDirection: 'row',
    padding: 10,
    alignSelf: 'flex-end'
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
  messageBubble: {
    marginLeft: 10,
    padding: 10,
    backgroundColor: typoColor.white1,
    borderRadius: 20,
    maxWidth: '80%'
  },
  messageText: {
    fontSize: 16
  },
  messageTime: {
    fontSize: 12,
    marginTop: 4,
    alignSelf: 'flex-end'
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
    padding: 10
  }
});

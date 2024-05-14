import { typoColor } from '@constants/appColors';
import { defaultImage } from '@constants/appConstants';
import useRootContext from '@hooks/useRootContext';
import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';

export interface AvatarProps {
  source: ImageSourcePropType;
}

export interface User {
  id: number;
  email: string;
  avatar: ImageSourcePropType;
}

const Avatar: React.FC<AvatarProps> = ({ source }) => <Image source={source} style={styles.avatar} />;

export interface MessageItemProps {
  message: Message;
}

export interface Message {
  id: string;
  text: string;
  time: string;
  user: User;
}

const MessageItem: React.FC<MessageItemProps> = ({ message }) => {
  const { state } = useRootContext();
  const { currentUser } = state.auth;
  const isCurrentUser = currentUser && currentUser.id?.toString() === message.user.id.toString();

  return (
    <View style={[styles.messageRow, isCurrentUser ? { alignSelf: 'flex-end' } : { alignSelf: 'flex-start' }]}>
      {/* <Avatar source={message.user.avatar} /> */}
      {!isCurrentUser && (
        <Image style={{ height: 50, width: 50, borderRadius: 40 }} resizeMode='cover' source={defaultImage} />
      )}
      <View style={styles.messageBubble}>
        <Text style={styles.messageText}>{message.text}</Text>
        <Text style={styles.messageTime}>{message.time}</Text>
      </View>
    </View>
  );
};

export default MessageItem;

const styles = StyleSheet.create({
  messageRow: {
    flexDirection: 'row',
    paddingBottom: 10,
    alignSelf: 'flex-start'
  },
  messageBubble: {
    marginLeft: 10,
    padding: 10,
    backgroundColor: typoColor.white1,
    borderRadius: 20,
    maxWidth: '75%'
  },
  messageText: {
    fontSize: 16
  },
  messageTime: {
    fontSize: 12,
    marginTop: 4
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20
  }
});

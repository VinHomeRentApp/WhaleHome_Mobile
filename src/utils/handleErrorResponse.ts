import { HttpStatusCode } from 'axios';
import { ALERT_TYPE } from 'react-native-alert-notification';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const handleErrorResponse = (status: number, error: any, context: string) => {
  switch (status) {
    case HttpStatusCode.NotFound:
      return {
        type: ALERT_TYPE.DANGER,
        title: 'Error',
        textBody: `Not Found Any with ${context}`
      };
    case HttpStatusCode.InternalServerError:
      return {
        type: ALERT_TYPE.DANGER,
        title: 'Error',
        textBody: `Request ${context} is not working, please try again later!`
      };
    case HttpStatusCode.NotImplemented:
      return {
        type: ALERT_TYPE.WARNING,
        title: 'Error',
        textBody: `Email you provide is Already Exist in ${context}`
      };
    default:
      return {
        type: ALERT_TYPE.DANGER,
        title: 'Error',
        textBody: `${context}, ${error.message}`
      };
  }
};

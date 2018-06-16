import { Message } from '../enums/messagetypes';
import { State } from '../enums/gamestates';

export interface Update {
    phase: State;
    type: Message;
    values: any;
}

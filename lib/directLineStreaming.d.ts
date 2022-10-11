import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Activity, ConnectionStatus, Conversation, IBotConnection } from './directLine';
interface DirectLineStreamingOptions {
    token: string;
    conversationId?: string;
    domain: string;
    botAgent?: string;
}
export declare class DirectLineStreaming implements IBotConnection {
    connectionStatus$: BehaviorSubject<ConnectionStatus>;
    activity$: Observable<Activity>;
    historyLoadedFlag: boolean;
    private activitySubscriber;
    private theStreamHandler;
    private domain;
    private conversationId;
    private token;
    private streamConnection;
    private queueActivities;
    private _botAgent;
    constructor(options: DirectLineStreamingOptions);
    reconnect({ conversationId, token }: Conversation): void;
    end(): void;
    private commonHeaders;
    private getBotAgent;
    private refreshToken;
    postActivity(activity: Activity): any;
    private postMessageWithAttachments;
    private waitUntilOnline;
    private connectAsync;
    private connectWithRetryAsync;
    private getRetryDelay;
}
export {};

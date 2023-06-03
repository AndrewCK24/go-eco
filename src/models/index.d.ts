import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";



type EagerVolunteerNum = {
  readonly max: number;
  readonly min: number;
}

type LazyVolunteerNum = {
  readonly max: number;
  readonly min: number;
}

export declare type VolunteerNum = LazyLoading extends LazyLoadingDisabled ? EagerVolunteerNum : LazyVolunteerNum

export declare const VolunteerNum: (new (init: ModelInit<VolunteerNum>) => VolunteerNum)

type EagerEventIntroductions = {
  readonly brief: string;
  readonly detail: string[];
  readonly relatedPageUrl?: string | null;
}

type LazyEventIntroductions = {
  readonly brief: string;
  readonly detail: string[];
  readonly relatedPageUrl?: string | null;
}

export declare type EventIntroductions = LazyLoading extends LazyLoadingDisabled ? EagerEventIntroductions : LazyEventIntroductions

export declare const EventIntroductions: (new (init: ModelInit<EventIntroductions>) => EventIntroductions)

type EagerLocation = {
  readonly locationName: string;
  readonly address: string;
  readonly meetPointName?: string | null;
}

type LazyLocation = {
  readonly locationName: string;
  readonly address: string;
  readonly meetPointName?: string | null;
}

export declare type Location = LazyLoading extends LazyLoadingDisabled ? EagerLocation : LazyLocation

export declare const Location: (new (init: ModelInit<Location>) => Location)

type EagerEventDatetime = {
  readonly beginningDate: string;
  readonly beginningTime: string;
  readonly endingDate: string;
  readonly endingTime: string;
}

type LazyEventDatetime = {
  readonly beginningDate: string;
  readonly beginningTime: string;
  readonly endingDate: string;
  readonly endingTime: string;
}

export declare type EventDatetime = LazyLoading extends LazyLoadingDisabled ? EagerEventDatetime : LazyEventDatetime

export declare const EventDatetime: (new (init: ModelInit<EventDatetime>) => EventDatetime)

type EagerApplyDate = {
  readonly beginningDate: string;
  readonly endingDate: string;
}

type LazyApplyDate = {
  readonly beginningDate: string;
  readonly endingDate: string;
}

export declare type ApplyDate = LazyLoading extends LazyLoadingDisabled ? EagerApplyDate : LazyApplyDate

export declare const ApplyDate: (new (init: ModelInit<ApplyDate>) => ApplyDate)

type EagerUserEvents = {
  readonly applied?: string[] | null;
  readonly followed?: string[] | null;
}

type LazyUserEvents = {
  readonly applied?: string[] | null;
  readonly followed?: string[] | null;
}

export declare type UserEvents = LazyLoading extends LazyLoadingDisabled ? EagerUserEvents : LazyUserEvents

export declare const UserEvents: (new (init: ModelInit<UserEvents>) => UserEvents)

type EagerEvent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Event, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly hostUserId: string;
  readonly type: string;
  readonly name: string;
  readonly longterm: boolean;
  readonly location: Location;
  readonly eventDatetime?: EventDatetime[] | null;
  readonly Event2Users?: (EventUser | null)[] | null;
  readonly applyDate: ApplyDate;
  readonly introduction?: EventIntroductions | null;
  readonly volunteerNum?: VolunteerNum | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Event, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly hostUserId: string;
  readonly type: string;
  readonly name: string;
  readonly longterm: boolean;
  readonly location: Location;
  readonly eventDatetime?: EventDatetime[] | null;
  readonly Event2Users: AsyncCollection<EventUser>;
  readonly applyDate: ApplyDate;
  readonly introduction?: EventIntroductions | null;
  readonly volunteerNum?: VolunteerNum | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Event = LazyLoading extends LazyLoadingDisabled ? EagerEvent : LazyEvent

export declare const Event: (new (init: ModelInit<Event>) => Event) & {
  copyOf(source: Event, mutator: (draft: MutableModel<Event>) => MutableModel<Event> | void): Event;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly oauthID: string;
  readonly oauthProvider: string;
  readonly name: string;
  readonly email: string;
  readonly nationalID: string;
  readonly dateOfBirth: string;
  readonly phoneNumber: string;
  readonly events?: UserEvents | null;
  readonly User2Events?: (EventUser | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly oauthID: string;
  readonly oauthProvider: string;
  readonly name: string;
  readonly email: string;
  readonly nationalID: string;
  readonly dateOfBirth: string;
  readonly phoneNumber: string;
  readonly events?: UserEvents | null;
  readonly User2Events: AsyncCollection<EventUser>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerEventUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EventUser, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly eventId?: string | null;
  readonly userId?: string | null;
  readonly event: Event;
  readonly user: User;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEventUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EventUser, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly eventId?: string | null;
  readonly userId?: string | null;
  readonly event: AsyncItem<Event>;
  readonly user: AsyncItem<User>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EventUser = LazyLoading extends LazyLoadingDisabled ? EagerEventUser : LazyEventUser

export declare const EventUser: (new (init: ModelInit<EventUser>) => EventUser) & {
  copyOf(source: EventUser, mutator: (draft: MutableModel<EventUser>) => MutableModel<EventUser> | void): EventUser;
}
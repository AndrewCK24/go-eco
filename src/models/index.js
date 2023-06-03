// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Event, User, EventUser, VolunteerNum, EventIntroductions, Location, EventDatetime, ApplyDate, UserEvents } = initSchema(schema);

export {
  Event,
  User,
  EventUser,
  VolunteerNum,
  EventIntroductions,
  Location,
  EventDatetime,
  ApplyDate,
  UserEvents
};
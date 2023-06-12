import { connect } from "mongoose";
import Event from "../../models/event.js";

connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export const handler = async (event) => {
  try {
    const eventData = JSON.parse(event.body);
    const newEvent = new Event(eventData);
    await newEvent.save();
    
    return {
      statusCode: 200,
      body: JSON.stringify(newEvent),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: error.toString(),
    };
  }
};

import { TweetCollection } from "../models/Tweet";
import { Tweet, tweets } from "../database/tweets";

class DBTwitter {
  async getTweets(): Promise<Tweet[]> {
    const tweets = await TweetCollection.find();
    return tweets;
  }

  async getNumberOfTweetsByLevel(params: { level: number }): Promise<number> {
    throw new Error("Method not implemented.");
  }

  async getNumberOfTweetsByLevelRange(params: {
    minLevel?: number;
    maxLevel?: number;
  }): Promise<number> {
    throw new Error("Method not implemented.");
  }

  async getTweetById(params: { id: number }): Promise<Tweet | null> {
    const tweet = await TweetCollection.findById(params.id);
    return tweet;
  }
  async getNumberOfFemaleUsers(): Promise<number> {
    throw new Error("Method not implemented.");
  }

  async getNumberOfMaleUsers(): Promise<number> {
    throw new Error("Method not implemented.");
  }

  async deleteTweet(params: { id: number }): Promise<void> {
    await TweetCollection.deleteOne({ _id:params.id });
  }

  async addTweet(tweet: Tweet): Promise<void> {
    await TweetCollection.create(tweet);
  }

  async updateTweet(params: {
    _id: number;
    user_name?: string;
    gender?: string;
    tweet?: string;
    spam_level?: number;
  }) {
    await TweetCollection.updateOne(params);
  }
}


export default DBTwitter;

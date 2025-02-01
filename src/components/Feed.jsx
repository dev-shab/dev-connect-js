import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/constants";
import { addFeed } from "../utils/feedSlice";
import { useEffect } from "react";
import { useCallback } from "react";
import UserCard from "./UserCard";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();

  const getFeed = useCallback(async () => {
    if (feed.length) return;
    try {
      const res = await axios.get(`${BASE_URL}/user/feed`, {
        withCredentials: true,
      });
      dispatch(addFeed(res?.data));
    } catch (error) {
      console.error(error);
    }
  }, [feed.length, dispatch]);

  useEffect(() => {
    getFeed();
  }, [getFeed]);

  if (!feed.length) {
    return <h1 className="text-center my-10">No New Users found</h1>;
  }

  return (
    <div className="flex justify-center my-10">
      <UserCard user={feed[0]} />
    </div>
  );
};

export default Feed;

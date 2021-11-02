import React, { useEffect, useState } from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import InputOption from "./InputOption";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import Post from "./Post";
import { db } from "./firebase";
import FlipMove from "react-flip-move";
import {
  collection,
  addDoc,
  orderBy,
  query,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");
  const postsCollectionRef = collection(db, "posts");
  const user = useSelector(selectUser);

  useEffect(() => {
    const q = query(postsCollectionRef, orderBy("timestamp", "desc"));

    const unsub = onSnapshot(q, (snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }))
      );
    });
    return unsub;
  }, []);

  console.log(posts);
  const sendPost = async (e) => {
    e.preventDefault();
    await addDoc(postsCollectionRef, {
      name: user.displayName,
      description: user.email,
      message: input,
      photoURL: user.photoURL || "",
      timestamp: serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              type="text"
              placeholder="Write something and hit Enter..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" onClick={sendPost}>
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write Article"
            color="#7FC15E"
          />
        </div>
      </div>

      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.id}
            name={post.data.name}
            description={post.data.description}
            message={post.data.message}
            photoURL={post.data.photoURL}
          />
        ))}
      </FlipMove>
    </div>
  );
};

export default Feed;

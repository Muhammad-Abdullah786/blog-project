import React, { useEffect, useState } from "react";
import service from "../../appwrite/conf";
import PostCard, { Container } from "../index";

function AllPosts() {
  const [load, setLoad] = useState(true);
  const [docs, setDocs] = useState([]);

  useEffect(async () => {
    service.listAllDocs([]).then((res) => {
      if (res) {
        setDocs(res.documents);
        setLoad(false);
      }
    });
  });
  return (
    <>
      <h1>All posts</h1>
      {load ? (
        <div>Loading....</div>
      ) : (
        <div>
          <Container>
            {docs.map((post) => (
              <div key={post.$id}>
                <PostCard post={post}></PostCard>
              </div>
            ))}
          </Container>
        </div>
      )}
    </>
  );
}

export default AllPosts;

import styled from "styled-components";
import CommentCard from "./portalComp/commentCard/commentCard";

const CommentComp = styled.div`
  .heading {
    width: 100%;
    padding: 25px;
  }
  margin: 0 auto;
  min-height: 100vh;
  width: 100%;
  padding: 30px 30px;
  display: flex;
  justify-content: center;
  text-align: center;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
`;

const Comment = ({ reservation }) => {
  return (
    <CommentComp>
      <h1 className="heading">Let's see what people say</h1>
      {reservation.map((resv) => {
        return (
          <CommentCard
            name={resv.name}
            surname={resv.surname}
            comment={resv.comment}
          />
        );
      })}
    </CommentComp>
  );
};

export default Comment;

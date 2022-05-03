import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../components/Navigation";
import { Button, ToggleButton, ButtonGroup } from "react-bootstrap";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
=======
import { Navigate, useNavigate } from "react-router-dom";
>>>>>>> master
import {
  Background,
  LikeBtnWrapper,
  MovieDetailWrapper,
  MovieDetailImg,
  MovieDetailImgWrapper,
  MovieDetailIndex,
  MovieInfoContainer,
  FlexContainer,
  MovieDetailTitle,
  MovieDetailMainInfo,
  ModalContainer,
} from "../styles/theme";
import { movieDetailInfo, reviewData } from "../dummy";
import { useParams } from "react-router-dom";
import ReviewItem from "../components/Review/ReviewItem";
import ReviewListBtn from "../components/Review/ReviewListBtn";
import WriteReview from "../components/Review/WriteReview";
import { useRecoilValue } from "recoil";
import { userState } from "../state";
function MovieDetail() {
  let params = useParams();
  const movieIndex = params.idx;
  const user = useRecoilValue(userState);
<<<<<<< HEAD
  let date = new Date();
  const [rating, setRating] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
=======
  const navigate = useNavigate();
  let date = new Date();
  const [rating, setRating] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
>>>>>>> master
  const [curReviewPage, setCurReviewPage] = useState(0);
  const [movieInfo, setMovieInfo] = useState([]);
  const [stillCuts, setStillCuts] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [dibs, setDibs] = useState(null);
  const [likeMovie, setLikeMovie] = useState(null);
  const [reviewContent, setReviewContent] = useState("");
<<<<<<< HEAD
  console.log(likeMovie);
  let reviewList = [];
  for (let i = (curReviewPage + 1) * 5 - 5; i < (curReviewPage + 1) * 5; i++) {
    if (i > Object.keys(reviews) - 1 || Object.keys(reviews).length == 0) break;
    reviewList.push(
      <ReviewItem
        nickName={reviewData[i].user_nick}
        idx={reviewData[i].review_idx}
        content={reviewData[i].review_content}
        rating={reviewData[i].review_rating}
        date={reviewData[i].review_date}
      />
    );
  }
=======
  let reviewList = [];
>>>>>>> master
  const postDibs = async () => {
    const response = await axios
      .post("/favorite/", {
        movie_idx: movieIndex,
        user_idx: user["userIdx"],
        date:
          date.getFullYear() +
          date.getMonth() +
          date.getDate() +
          date.getHours() +
          date.getMinutes() +
          " ",
      })
<<<<<<< HEAD
      .then((res) => res.data);
=======
      .then((res) => res.data)
      .then((res) =>
        res.result == "success"
          ? alert("내가 찜한 영화에 추가됐어요!")
          : alert("찜 등록을 해제했어요!")
      )
      .catch(() => alert("잠시후에 다시 시도해주세요"));
>>>>>>> master
  };
  const postReview = async () => {
    const response = await axios
      .post(`/movies/detail/${movieIndex}`, {
        movie_idx: movieIndex,
        user_idx: user["userIdx"],
        review_content: reviewContent,
<<<<<<< HEAD
      })
      .then((res) => res.data);
  };
=======
        rating: 0,
      })
      .then((res) => res.data)
      .then(() => alert("리뷰를 등록했어요!"))
      .then(() => window.location.reload());
  };
  const editReview = async () => {
    const response = await axios
      .patch(`/movies/detail/${movieIndex}`, {
        movie_idx: movieIndex,
        user_idx: user["userIdx"],
        review_content: reviewContent,
      })
      .then(() => alert("리뷰 수정이 완료되었습니다!"))
      .then(() => window.location.reload());
  };

  const deleteReview = async () => {
    const response = await axios
      .delete(`/movies/detail/${movieIndex}`, {
        data: {
          movie_idx: movieIndex,
          user_idx: user["userIdx"],
        },
      })
      .then((res) => res.data)
      .then(() => alert("리뷰가 삭제되었습니다!"))
      .then(() => window.location.reload());
  };

>>>>>>> master
  useEffect(() => {
    const call = async () => {
      const response = await axios
        .get(`/movies/detail/${movieIndex}`)
        .then((res) => res.data);
      setMovieInfo(response[0]);
      setReviews(response[1]);
      setDibs(response[2]["dibs"] == "doing" ? true : false);
      let stills = response[0].movie_stills.split(",");
      setStillCuts(stills);
    };
    call();
  }, []);
<<<<<<< HEAD
=======

  for (let i = 0; i < Object.keys(reviews).length; i++) {
    reviewList.push(
      <ReviewItem
        reviewIdx={reviews[i].review_idx}
        content={reviews[i].review_content}
        date={reviews[i].review_date}
        userIdx={reviews[i].user_idx}
        editReview={editReview}
        deleteReview={deleteReview}
        setEditOpen={setEditOpen}
      />
    );
  }
>>>>>>> master
  return (
    <>
      <Nav />
      <MovieInfoContainer>
        <FlexContainer>
          <MovieDetailImgWrapper>
            <MovieDetailImg src={movieInfo.movie_img_link} />
          </MovieDetailImgWrapper>
          <div>
            <MovieDetailTitle>
              {movieInfo.movie_title}
              {`(${movieInfo.movie_year})`}
            </MovieDetailTitle>
            <MovieDetailMainInfo>
              <b>장르</b> {movieInfo.movie_genre}
            </MovieDetailMainInfo>
            <MovieDetailMainInfo>
              <b>상영시간</b> {movieInfo.movie_runtime}분
            </MovieDetailMainInfo>
            <MovieDetailMainInfo>
              <b>감독</b> {movieInfo.movie_director}
            </MovieDetailMainInfo>
            <MovieDetailMainInfo>
              <b>배우</b> {movieInfo.movie_actors}
            </MovieDetailMainInfo>
          </div>
          <LikeBtnWrapper>
            <Button
              variant={dibs ? "outline-danger" : "danger"}
              onClick={() => postDibs()}
            >
              찜
            </Button>
            <Button onClick={() => setIsOpen(true)}>리뷰쓰기</Button>
          </LikeBtnWrapper>
        </FlexContainer>

        <MovieDetailWrapper>
          <MovieDetailIndex>줄거리</MovieDetailIndex>
          <p>{movieInfo.movie_plot}</p>
        </MovieDetailWrapper>

        <MovieDetailWrapper>
          <MovieDetailIndex>트레일러</MovieDetailIndex>
          <div>
            {stillCuts.map((item) => (
              <img src={item} />
            ))}
          </div>
        </MovieDetailWrapper>
        <MovieDetailWrapper>
          <MovieDetailIndex>리뷰</MovieDetailIndex>

          {reviewList}
<<<<<<< HEAD
          <ReviewListBtn
            curReviewPage={curReviewPage}
            setCurReviewPage={setCurReviewPage}
            reviewListLen={reviewData.length}
          />
=======
          {/* <ReviewListBtn
            curReviewPage={curReviewPage}
            setCurReviewPage={setCurReviewPage}
            reviewListLen={reviewData.length}
          /> */}
>>>>>>> master
        </MovieDetailWrapper>
      </MovieInfoContainer>
      {isOpen ? (
        <Background onClick={() => setIsOpen(false)}>
          <ModalContainer onClick={(e) => e.stopPropagation()}>
            <div>
              <h3>리뷰 작성</h3>
            </div>
            <WriteReview setReviewContent={setReviewContent} />
            <Button
              onClick={() => {
                postReview();
                setIsOpen(false);
              }}
            >
              작성 완료
            </Button>
            <Button onClick={() => setIsOpen(false)}>취소</Button>
          </ModalContainer>
        </Background>
      ) : (
        <></>
      )}
<<<<<<< HEAD
=======
      {editOpen ? (
        <Background onClick={() => setEditOpen(false)}>
          <ModalContainer onClick={(e) => e.stopPropagation()}>
            <div>
              <h3>리뷰 수정</h3>
            </div>
            <WriteReview setReviewContent={setReviewContent} />
            <Button
              onClick={() => {
                editReview();
                setIsOpen(false);
              }}
            >
              작성 완료
            </Button>
            <Button onClick={() => setIsOpen(false)}>취소</Button>
          </ModalContainer>
        </Background>
      ) : (
        <></>
      )}
>>>>>>> master
    </>
  );
}
export default MovieDetail;

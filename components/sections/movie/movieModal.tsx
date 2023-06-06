import { Modal, Box, Container, Divider, Stack } from "@mui/material";
import CommentsList from "../comments/commentsList";
import MoviePersonsList from "./moviePersonsList";
import { modalStore } from "@/store/modalStore";
import { observer } from "mobx-react-lite";
import MyTitle from "../../content/myTitle";
import { Person } from "../../../interfaces/persons";
import { CommentI } from "../../../interfaces/comment";
import BackButton from "@/components/controls/navigation/backButton";

interface MovieModalProps {
  movieId: number;
  persons: Person[];
  comments: CommentI[];
}

const MovieModal = observer(
  ({ movieId, persons, comments }: MovieModalProps) => {
    return (
      <>
        <Modal
          open={modalStore.modalIsOpen}
          onClose={() => modalStore.closeModal()}
          sx={{
            display: "flex",
            pt: "2rem",
            justifyContent: "center",
            overflow: "auto",
            backgroundColor: "rgba(16, 14, 25, 0.9)",
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "1200px",
              m: "0 auto",
              padding: "0 4rem",
            }}
          >
            <Box sx={{ position: "absolute", left: "32px" }}>
              <BackButton func={() => modalStore.closeModal()} />
            </Box>

            <Stack direction="row" alignItems="center" sx={{ mt: "48px" }}>
              <MyTitle
                text="Создатели"
                isButton={true}
                showRedBorder={true}
                onClick={() => modalStore.showCreators()}
              />
              <MyTitle
                text="Отзывы"
                isButton={true}
                showRedBorder={true}
                onClick={() => modalStore.showReviews()}
              />
              <MyTitle
                text="Трейлеры"
                isButton={true}
                showRedBorder={true}
                onClick={() => modalStore.showTrailers()}
              />
            </Stack>

            <Divider
              sx={{
                color: "#fff",
                width: "100%",
                height: "1px",
                borderColor: "rgba(255,255,255,0.12)",
                mt: "13px",
              }}
            />

            <Box>{modalStore.content}</Box>
            {modalStore.content === "Отзывы" ? (
              <CommentsList movieId={movieId} comments={comments} />
            ) : null}
            {modalStore.content === "Создатели" ? (
              <MoviePersonsList persons={persons} />
            ) : null}
          </Box>
        </Modal>
        {modalStore.modalIsOpen && (
          <Box
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          />
        )}
      </>
    );
  }
);

export default MovieModal;

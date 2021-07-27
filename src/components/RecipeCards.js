import { Container, Grid } from "@material-ui/core";
import { cardsInformation } from "../dummyData";
import RecipeCard from "./RecipeCard";

export default function RecipeCards() {
  return (
    <Container>
      <Grid spacing={6} container justify="center">
        {cardsInformation.map((cardInfo, index) => {
          return (
            <Grid item key={index} xs={12} md={6} lg={4}>
              <RecipeCard cardInfo={cardInfo} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

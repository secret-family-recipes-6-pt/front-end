import { Container, Grid } from "@material-ui/core";
import { cardsInformation } from "../dummyData";
import RecipeCard from "./RecipeCard";

export default function RecipeCards({searchForm}) {
  const {searchCategory, searchTerm} = searchForm;

  return (
    <Container>
      <Grid spacing={6} container justifyContent="center" alignItems="baseline">
        {cardsInformation.map((cardInfo, index) => {
          if (searchCategory === "all" && searchTerm===""){
            return (
              <Grid item key={index} xs={12} md={6} lg={4}>
                <RecipeCard cardInfo={cardInfo} />
              </Grid>
            );} 
          else if (cardInfo.name.includes(searchTerm) && (cardInfo.category === searchCategory || searchCategory === "all")){
            return (
              <Grid item key={index} xs={12} md={6} lg={4}>
                <RecipeCard cardInfo={cardInfo} />
              </Grid>
            );}
            else{
              //pass
            }

          }
        )}
      </Grid>
    </Container>
  );
}

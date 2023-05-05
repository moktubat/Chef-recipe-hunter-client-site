import React from "react";
import { FaThumbsUp } from "react-icons/fa";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Recipes from "./Recipes";

const ChefRecipes = () => {
  const { id } = useParams();
  const chefInfo = useLoaderData();
  const { name, image, experience, recipes, likes, bio, recipe } = chefInfo;

  console.log(recipe.recipe_name);

  return (
    <div>
      <div class="h-100 gradient-custom-2">
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col col-lg-9 col-xl-7">
              <div class="card">
                <div
                  class="rounded-top text-white d-flex flex-row"
                  style={{
                    backgroundImage:
                      "url(" +
                      "https://img.freepik.com/free-photo/vegetables-italian-knife-placed-left-black-table_1220-684.jpg" +
                      ")",
                    height: "200px",
                  }}
                >
                  <div
                    class="ms-4 mt-5 pb-3 d-flex flex-column"
                    style={{ width: "150px" }}
                  >
                    <img
                      src={image}
                      alt="Generic placeholder image"
                      class="h-100 w-75 img-thumbnail mt-4 mb-2 rounded"
                    />
                  </div>
                  <div class="ms-3" style={{ marginTop: "130px" }}>
                    <h5>{name}</h5>
                    <p>New York</p>
                  </div>
                </div>
                <div className="container row">
                  <div className="col-6">
                    <h3 className="ms-3 mt-4">Bio</h3>
                    <p className="ms-3">{bio}</p>
                  </div>
                  <div
                    class="p-4 text-black col-6"
                    style={{ backgroundColor: "#f8f9fa" }}
                  >
                    <div class="d-flex justify-content-end text-center py-1">
                      <div>
                        <p class="mb-1 h5">{experience}Y</p>
                        <p class="small text-muted mb-0">Experience</p>
                      </div>
                      <div class="px-3">
                        <p class="mb-1 h5">{likes}K</p>
                        <p class="small text-muted mb-0">
                          <FaThumbsUp className="m-1"></FaThumbsUp>Likes
                        </p>
                      </div>
                      <div>
                        <p class="mb-1 h5">{recipes}</p>
                        <p class="small text-muted mb-0">Recipes</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-body p-4 text-black">
                  <div class="d-flex justify-content-between align-items-center mb-4">
                    <p class="lead fw-normal mb-0">Best Recipes</p>
                    <p class="mb-0">
                      <Link to="#!" class="text-muted">
                        Show all
                      </Link>
                    </p>
                  </div>
                  <div class="row g-2">
                    <div class="col mb-2">
                      {
                        recipe.map(rec => <Recipes 
                        key={rec.id} 
                        rec={rec}>
                          
                          
                        </Recipes>)
                      }
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefRecipes;

import React from "react";
import FilterBar from "../components/FilterBar";
import RestaurantList from "../components/RestaurantList";
import Title from "../components/Title";
import styled from "styled-components";
import postAnalytics from "../api/analytics";

const Main = styled.main`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  width: 100%;
`;

const StyledFilterBar = styled(FilterBar)`
  width: 100%;
  padding: 20px 10px;
`;

export default function Home({ history, location, toggleTheme }) {
  const params = new URLSearchParams(location.search);
  const [filters, setFilters] = React.useState({
    category: params.get("category") || "",
    distance: params.get("distance") || "",
    rating: params.get("rating") || ""
  });

  function handleFilterChange(name, value) {
    // Create a copy of filters object
    const newFilters = { ...filters }; // or Object.assign({}, filters);
    params.delete(name);
    if (value) {
      newFilters[name] = value;
      params.append(name, value);
    } else {
      delete newFilters[name];
    }
    setFilters(newFilters);
    history.push(`${location.pathname}?${params.toString()}`);
    postAnalytics({
      timestamp: Date(),
      selectedFilter: newFilters[name]

      // imgSrc:
      //   "https://static.lieferando.de/images/restaurants/de/OPROO0P/logo_465x320.png",
      // title: title,
      // categories: ["pizza", "salad", "pasta"],
      // distance: 6,
      // rating: 3.1,
      // description: "Eat italian"
    });
  }

  return (
    <>
      <Title toggleTheme={toggleTheme} />
      <StyledFilterBar
        selectedFilters={filters}
        onFilterChange={handleFilterChange}
      />
      <Main>
        <RestaurantList selectedFilters={filters} />
      </Main>
    </>
  );
}

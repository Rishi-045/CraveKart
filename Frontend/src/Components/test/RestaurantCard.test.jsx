import { render,screen } from "@testing-library/react";
import { expect, it } from "vitest";
import RestaurantCard, { withPromotedLabel } from "../restaurantCard/RestaurantCard"
import mockData from "./mocks/resDataMock.json"
import DummyRestaurantCard from "./DummyRestaurantCard";




it("should render restaurant card components with props data",()=>{
    render(<RestaurantCard resData = {mockData}/>);

    const name = screen.getByText("NIC Ice Creams");
    expect(name).toBeInTheDocument()
})

it("should render restaurantcard component with promoted label",()=>{
    //test higher order componenet with promoted label
    const WrappedCard = withPromotedLabel(DummyRestaurantCard)
    console.log(<WrappedCard />)
    render(<WrappedCard name={"KFC"}/>)
    const name = screen.getByText("Promoted")
    expect(name).toBeInTheDocument()
})
import AboutUsPage from "../page/AboutUsPage";
import BlogPage from "../page/BlogPage";
import ContactUsPage from "../page/ContactUsPage";
import DetailHotelPage from "../page/DetailHotelPage";
import FindPage from "../page/FindPage";
import HomePage from "../page/HomePage";
import ListHotelPage from "../page/ListHotelPage";
import OurservicePage from "../page/OurservicePage";

export const routes =[
    {
        path : "/",
        page :HomePage
    },
    {
        path : "/aboutus",
        page :AboutUsPage
    },
    {
        path : "/contact",
        page :ContactUsPage
    },
    {
        path : "/ourservice",
        page :BlogPage
    },
    {
        path : "/blog",
        page :OurservicePage
    },
    {
        path : "/find",
        page :FindPage
    },
    {
        path : "/detail",
        page :DetailHotelPage
    },
    {
        path : "/list",
        page :ListHotelPage
    },
]
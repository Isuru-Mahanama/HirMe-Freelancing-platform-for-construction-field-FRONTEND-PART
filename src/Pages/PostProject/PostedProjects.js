import React from "react";
import { Link } from "react-router-dom";
import './Post_project.css'
import { CardData } from "../../components/components/components";
class PostedProjects extends React.Component {
    constructor(props){
        super(props);
        this.state = { cardData :[ {
            title: "Card 1",
            description: "This is card 1",
            image: "https://picsum.photos/300/200",
            freelancerLink: "/portfolio",
            profileImage: "https://picsum.photos/300/200",
            price: "5$",
            projectLink :"/viewproject"
        },
        {
            title: "Card 2",
            description: "This is card 2",
            image: "https://picsum.photos/300/200",
            freelancerLink: "/portfolio",
            profileImage: "https://picsum.photos/300/200",
            price: "5$",
            projectLink :"/viewproject"
        }] } 
    } 
    render() { 
        return (
            <div className="background">
                    <div >show all the client posted projects as gigs</div>
                    <div> click the gigs go to the list of  applications related to one gig</div>
                    <CardData cardData={this.state.cardData}/>
                    <Link to = "/viewapplications">
                    <button className="button"> view all applications</button>
                    </Link>
            </div>
        );
    }
}
 
export default PostedProjects;
import onTheStreet from "../images/onTheStreet.jpeg"
import VogueVintage from "../images/VogueVintage.jpeg"

export default function Article(){
    return(
    <>
        <article>
            <time datetime="2020-11-12">11/12/20</time>
            <h1 class="blog-title">On the Street in Brooklyn</h1>
            <img src={onTheStreet} alt="Brookyln"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel vitae molestiae nesciunt animi ipsum quaerat
                fuga a, repellat nihil eveniet sunt perspiciatis cumque pariatur aspernatur voluptate consequuntur,
                voluptatem autem. Eveniet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat illo ipsa ea nulla perspiciatis deserunt omnis, necessitatibus dolor. Quae, id! Aut minima, nulla repellendus libero laboriosam rem perferendis sint voluptatibus? Eveniet</p>
            <a href={"/#"}>Continues ...</a>
        </article>
        <article>
            <time datetime="2020-11-11">11/11/20</time>
            <h1 class="blog-title">Vintage in Vogue</h1>
            <img src={VogueVintage} alt="VogueVintage"/>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Porro sunt pariatur illo, nobis quasi, est
                rerum ad reiciendis ut impedit, cupiditate quas iure debitis earum quia harum incidunt dolor nulla?</p>
            <a href={"/#"}>Continues ...</a>
        </article>
    </>
    )
}
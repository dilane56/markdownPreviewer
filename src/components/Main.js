import '../styles/Main.css'
import React from 'react';


function Main() {
    const style = { opacity: 1 }
    const style1 = { backgroundColor: "rgb(44, 62, 80)" }
    return (
        <div id="wrapper">
            <div id="quote-box">
                <div class="quote-text" style={style}>
                    <i class="fa fa-quote-left"> </i><span id="text">The best time to plant a tree was 20 years ago. The second best time is now.</span>
                </div>
                <div class="quote-author" style={style}>- <span id="author">Chinese Proverb</span></div>
                <div class="buttons">
                    <a class="button" id="tweet-quote" title="Tweet this quote!" target="_top" href="https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text=%22The%20best%20time%20to%20plant%20a%20tree%20was%2020%20years%20ago.%20The%20second%20best%20time%20is%20now.%22%20Chinese%20Proverb" style={style1}>
                        <i class="fa fa-twitter"></i>
                    </a>
                    <a class="button" id="tumblr-quote" title="Post this quote on tumblr!" target="_blank" href="https://www.tumblr.com/widgets/share/tool?posttype=quote&amp;tags=quotes,freecodecamp&amp;caption=Chinese%20Proverb&amp;content=The%20best%20time%20to%20plant%20a%20tree%20was%2020%20years%20ago.%20The%20second%20best%20time%20is%20now.&amp;canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&amp;shareSource=tumblr_share_button style={style1}`" >
                        <i class="fa fa-tumblr"></i>
                    </a>
                    <button class="button" id="new-quote" style={style1}>New quote</button>
                </div>
            </div>
            <div class="footer">by <a href="https://codepen.io/hezag/">hezag</a></div>
        </div>
    );
}

export default Main;

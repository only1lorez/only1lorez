<svetle:head>
    <title>only1lorez</title>
</svetle:head>

<body>
        <video id="bg-video" muted loop autoplay>
            <source src="/bg.mp4" type="video/mp4">
        </video>

        <div id="vanta-bg">
            <header>
                <div>
                    <img src="/only1lorez.png" alt="only1lorez logo">
                </div>

                <h3> @only1lorez </h3>
                <h4>LOREZ</h4>
                <p>Beatmaker │ WEB Designer </p>
            </header>

            <main>

                <section>
                    <div>
                        <ul class="links-list">

                            <li class="link_button">
                                <a href="https://www.youtube.com/channel/UCC8V5JZeOyDERFbFD45MCXA">Youtube</a>
                            </li>
                            
                            <li class="link_button">
                                <a href="https://t.me/only1lor3z">Telegram</a>
                            </li>
                            
                            <li class="link_button">
                                <a href="https://soundcloud.com/only1lorez">SoundCloud</a>
                            </li>

                            <li class="link_button">
                                <a href="https://www.instagram.com/only1lorez/">Instagram</a>
                            </li>
                            
                            <li class="link_button">
                                <a href="https://github.com/only1lorez">GitHub</a>
                            </li>
                            
                        </ul>
                    </div>
            </section>

            </main>

            <footer>
                <p>designed/coded by only1lorez.</p>
                <a href="https://github.com/only1lorez/link-in-bio">GitHub</a>
            </footer> 

        </div>

</body>

<style>

* {
    margin: 0;
    padding: 0;
}

body * {
    font-family: 'Raleway', sans-serif;
    line-height: 160%;
}

body {
    background-color: #000000;
    background-size: 100% auto;
}

video {
    position: fixed;
    top: 0;
    left: 0;
    min-width: 100%;
    min-height: 100%;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: .8;
}

video::-webkit-media-controls{display: none !important;}

#vanta-bg {
    z-index: 0px;
    position: absolute;
    left: 0;
    top: 145px;
    width: 100%;
}

header {
    text-align: center;
    padding: 32px;
    padding-bottom: 0;
    height: 245px;
    color: white;
}

header img {
    width: 100%;
    border-radius: 50%;
}

header div {
    width: 120px;
    margin: auto;

    border-radius: 50%;

    display: flex;
    padding: 4px;

    transition: transform .3s;
}

header div:hover {
    transform: scale(1.1)
}

header h3 {
    display: inline-block;
    text-align: center;
    padding-top: 5px;
    color: white;
    letter-spacing: 1px;
}

header h4 {
    padding-top: 2px;
}

header p {
    padding-top: 5px;
    font-size: 12px;
    text-align: center;
    color: white;
    letter-spacing: 1px;
}

main {
    max-width: 440px;
    width: 90%;
    margin: 0 auto;
}

section div {
    background: transparent;
    border-radius: 8px;
}

section ul {
    box-sizing: border-box;
    padding: 0px 0 12px 0;
    list-style: none;
    flex-wrap: wrap;
    margin: auto;
}

.link_button {
    background-color: #000000;
    border-radius: 8px;
    padding: 10px;
    margin: 10px 5px;    
}

ul li a {
    display: flex;
    flex-direction: row;
    justify-content: center;
    color: white;
    text-decoration: none;
    text-align: center;
}


.link_button:hover {
    transform: scale(1.02);
    background-color: transparent;
}

.link_button {
    transition: transform .3s;
    
    backdrop-filter: blur(5px); /* Chrome and Opera */
    box-shadow: 0px 0px 10px 0px rgb(0 0 0 / 15%);
}

footer {
    padding-top: 0px;
    text-align: center;
    font-size: 10px;
    color: rgb(141, 141, 141);
    margin: auto;
    letter-spacing: 1px;
}

footer a {
    padding-top: 0px;
    text-align: center;
    font-size: 10px;
    color: rgb(141, 141, 141);
    margin: auto;
    letter-spacing: 1px;
}

/* Start of animation */

header div {
    animation: fromTop .7s .2s backwards;
}

header h3 {
    animation: fadeIn .7s .2s backwards;
    animation-delay: .2s;
}

header h4 {
    animation: fadeIn .7s .2s backwards;
    animation-delay: .3s;
}

header p {
    animation: fadeIn .7s .2s backwards;
    animation-delay: .4s;
}

main {
    animation: fadeIn .7s .2s backwards;
    animation-delay: .7s;
}

footer {
    animation: fadeIn .7s .2s backwards;
    animation-delay: .9s;
}


@keyframes fromTop {
    from {
        opacity: 0;
        transform: translateY(-30px)
    }
    
    to {
        opacity: 1;
        transform: translateY(0)
    }
}

@keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
}

/* End of animation */
</style>
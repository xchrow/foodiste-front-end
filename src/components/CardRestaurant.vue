<template>
    <div class="card mb-3 ml-auto mr-auto mt-6" style="max-width: 60%;">
        <div class="row g-0 ">
            <div class="col-md-3">
                <img src="https://lh5.googleusercontent.com/p/AF1QipNcJMW6b0WsFEatnRlSTt4kRUsEXMkLx6LMqV04=w740-h420-k-no"
                    class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-9">
                <div class="card-body pb-0">
                    <div class="d-flex ">
                        <button>
                            <v-avatar
                                image="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.jpg"
                                rounded="0" size="30" class="mb-1"></v-avatar>
                        </button>
                        <h5 class="card-pseudo col-md-4 ml-3">Pseudo de la personne</h5>
                        <p class="fw-light">@pseudo</p>
                    </div>

                    <hr class="hr hr-blurry my-2" />

                    <div class="d-flex">
                        <h3 class="card-title">Nom du restaurant</h3>
                        <div class="d-flex justify-content-end align-items-center">
                            <a href="#" class="badge rounded-pill text-bg-secondary mx-2 text-decoration-none">Asiatique</a>

                            <a href="#" class="badge rounded-pill text-bg-secondary mx-2 text-decoration-none">Sushi</a>

                            <a href="#" class="badge rounded-pill text-bg-secondary mx-2 text-decoration-none">...</a>
                        </div>
                    </div>
                    

                    <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis ullam quibusdam
                        eaque magni assumenda, excepturi illum minus sunt voluptatem? Laborum saepe voluptas natus inventore
                        eum non ea vero beatae sint!excepturi illum minus sunt voluptatem? Laborum saepe voluptas natus inventore
                        eum non ea vero beatae sint! .</p>


                    <div class="d-flex">
                        <div class="me-auto">
                            <p class="card-text"><small class="text-body-secondary">édité il y a 3 minutes</small></p>
                        </div>
                        <div class="icone d-flex justify-content-end">
                            <button name="like" type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                                    class="bi bi-star d-flex mx-2" viewBox="0 0 16 16">
                                    <path
                                        d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                </svg>
                            </button>
                            <button name="message" type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-chat-left d-flex mx-2" viewBox="0 0 16 16">
                                    <path
                                        d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                </svg>
                            </button>
                            <button name="enregistrement" type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-bookmark d-flex mx-2" viewBox="0 0 16 16">
                                    <path
                                        d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

</script>
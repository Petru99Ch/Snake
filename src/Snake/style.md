.tail{
        
        background-image: url(./snake.png);
        background-position: 0 -144px;
    }
        .dir-{
            &up{
                .tail{
                    background-position: 0 -144px;
                }
            }
            &down{
                .tail{
                    background-position: 0 -72px;
                }
            }
            &left{
                .tail{
                    background-position: -144px 0;
                }
            }
            &right{
                .tail{
                    background-position: -72px 0;
                }
            }
        }



.head{
        @include box;
        background-image: url(./snake.png);
        background-position: -216px -72px;
    }
        .dir-{
            &up{
                .head{
                    background-position: -216px -72px;
                }
                
            }
            &down{
                .head{
                    background-position: -216px -144px;
                }
                
            }
            &left{
                .head{
                    background-position: -72px -216px;
                    
                }
                
            }
            &right{
                .head{
                    background-position: -144px -216px;
                }
                
            }
        }
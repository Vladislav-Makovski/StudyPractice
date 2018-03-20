var module = (function () {
    var photoPosts = [

        {
            id: '1',
            descriprion: 'Рассвет в Барселоне',
            createdAt: new Date('2017-07-30T23:00:00'),
            author: 'Picasso',
            photoLink: 'img/1.jpg',
            likes: ['Pavel'],
            hashtags: ['#morning']
        },
        {
            id: '2',
            descriprion: 'Ветренная Венгрия',
            createdAt: new Date('2017-08-12T22:00:00'),
            author: 'Michelangelo',
            photoLink: 'img/2.jpg',
            likes: ['Kate'],
            hashtags: ['#trip']
        },
        {
            id: '3',
            descriprion: 'Бессонные ночи',
            createdAt: new Date('2017-09-14T21:00:00'),
            author: 'Raphael',
            photoLink: 'img/3.jpg',
            likes: ['NaVi'],
            hashtags: ['#nightСity']
        },
        {
            id: '4',
            descriprion: 'Прогулки на природе',
            createdAt: new Date('2017-09-18T20:00:00'),
            author: 'Donatello',
            photoLink: 'img/4.jpg',
            likes: ['Skrip'],
            hashtags: ['#forest']
        },
        {
            id: '5',
            descriprion: 'Летние ночи',
            createdAt: new Date('2017-11-11T19:00:00'),
            author: 'Leonardo',
            photoLink: 'img/5.jpg',
            likes: ['Simple'],
            hashtags: ['#dawn']
        },
        {
            id: '6',
            descriprion: 'Весь мир у ваших ног',
            createdAt: new Date('2017-12-12T18:00:00'),
            author: 'Snoop Dog',
            photoLink: 'img/6.jpg',
            likes: ['Zeus'],
            hashtags: ['#love']
        },
        {
            id: '7',
            descriprion: 'Парни с улиц гетто',
            createdAt: new Date('2018-01-12T17:00:00'),
            author: 'Drake',
            photoLink: 'img/7.jpg',
            likes: ['KanyeWest', 'Horse'],
            hashtags: ['#egypt']
        },
        {
            id: '8',
            descriprion: 'Дождливая Барселона',
            createdAt: new Date('2018-01-24T16:00:00'),
            author: '2Pac',
            photoLink: 'img/8.jpg',
            likes: ['Karl', 'Lucy'],
            hashtags: ['#rain']
        },
        {
            id: '9',
            descriprion: 'Цените моменты',
            createdAt: new Date('2018-02-06T15:00:00'),
            author: 'McFlurry',
            photoLink: 'img/9.jpg',
            likes: ['Guf'],
            hashtags: ['#myFavoriteGirl']
        },
        {
            id: '10',
            descriprion: 'Покоряем новые высоты',
            createdAt: new Date('2018-03-01T14:00:00'),
            author: 'Obladaet',
            photoLink: 'img/10.jpg',
            likes: ['Fake'],
            hashtags: ['#winterTrip']
        },
        {
            id: '11',
            descriprion: 'Ночной Минск',
            createdAt: new Date('2018-03-03T13:00:00'),
            author: 'Rocket',
            photoLink: 'img/11.jpg',
            likes: ['Doctor'],
            hashtags: ['#minsk']
        },
        {
            id: '12',
            descriprion: 'Белорусский хогвартс',
            createdAt: new Date('2018-03-07T12:00:00'),
            author: 'Rabbit',
            photoLink: 'img/12.jpg',
            likes: ['Robert'],
            hashtags: ['#lyceumBSU']
        },
        {
            id: '13',
            descriprion: 'Утренняя Варшава',
            createdAt: new Date('2018-02-10T11:00:00'),
            author: 'Ice',
            photoLink: 'img/13.jpg',
            likes: ['Viola'],
            hashtags: ['#warsaw']
        },
        {
            id: '14',
            descriprion: 'Лучшая базилика',
            createdAt: new Date('2018-02-13T10:00:00'),
            author: 'Tramp',
            photoLink: 'img/14.jpg',
            likes: ['Priest'],
            hashtags: ['#basilica']
        },
        {
            id: '15',
            descriprion: 'Не фонтан, но брызги есть',
            createdAt: new Date('2018-02-15T09:00:00'),
            author: 'Pascal',
            photoLink: 'img/15.jpg',
            likes: ['MaxPane'],
            hashtags: ['#fountain']
        },
        {
            id: '16',
            descriprion: 'Мои home',
            createdAt: new Date('2018-02-23T08:00:00'),
            author: 'HomeBoy',
            photoLink: 'img/16.jpg',
            likes: ['Dori', 'Polly'],
            hashtags: ['#squad']
        },
        {
            id: '17',
            descriprion: 'Барселонский андеграунд',
            createdAt: new Date('2018-02-26T07:00:00'),
            author: 'Traveler',
            photoLink: 'img/17.jpg',
            likes: ['Juli', 'Egerag'],
            hashtags: ['#underground']
        },
        {
            id: '18',
            descriprion: 'Минское море',
            createdAt: new Date('2018-02-27T06:00:00'),
            author: 'Photographer',
            photoLink: 'img/18.jpg',
            likes: ['PashaFast'],
            hashtags: ['#see']
        },
        {
            id: '19',
            descriprion: 'Следуй за мной',
            createdAt: new Date('2018-02-28T05:00:00'),
            author: 'Lovelace',
            photoLink: 'img/19.jpg',
            likes: ['Butter'],
            hashtags: ['#field']
        },
        {
            id: '20',
            descriprion: 'Одогрупники',
            createdAt: new Date('2018-03-08T04:00:00'),
            author: 'Kyivstoner',
            photoLink: 'img/20.jpg',
            likes: ['Javno'],
            hashtags: ['#classmates']
        }
    ];

    function get(filterConfig, skipNumber, topNumber) {
        var result = photoPosts.slice();
        if (!skipNumber) {
            skipNumber = 0;
        }
        if (!topNumber) {
            topNumber = 10;
        }
        if (!filterConfig) {
            return result.splice(skipNumber, topNumber);
        }
        if (filterConfig) {
            if (filterConfig.author) {
                result = result.filter(function (post) {
                    if (post.author == filterConfig.author) {
                        return post;
                    }
                });
                return result.slice(skipNumber, topNumber);
            }
            if (filterConfig.hashtags) {
                result = result.filter(function (post) {
                    if (post.hashtags == filterConfig.hashtags) {
                        return post;
                    }
                });
                return result.slice(skipNumber, topNumber);
            }
            if (filterConfig.createdAt) {
                result = result.filter(function (post) {
                    if (filterConfig.createdAt - post.createdAt == 0) {
                        return post;
                    }
                });
                return result.slice(skipNumber, topNumber);
            }
        }
    }

    function getOnePost(id) {
        return photoPosts.find(function (post) {
            return post.id == id;
        });
    }

    function validate(photoPost) {
        var validity = true;
        for (var i = 0; i < photoPosts.length; i++) {
            if (photoPosts[i].id == photoPost.id) {
                validity = false;
            }
        }
        if (!photoPost.author) {
            validity = false;
        }
        if (!photoPost.descriprion) {
            validity = false;
        }
        if (!photoPost.photoLink) {
            validity = false
        }
        if (photoPost.hashtags[0].charAt(0) != '#') {
            validity = false;
        }
        return validity;
    }

    function addPost(photoPost) {
        if (validate(photoPost)) {
            photoPosts.push(photoPost);
            return true;
        }
        else {
            return false;
        }

    }

    function removePost(id) {
        var a = 0;
        photoPosts = photoPosts.filter(function (post) {
            if (post.id != id) {
                return post;
            }
            else {
                a++;
            }
        });
        if (a == 0) {
            return false;
        }
        else {
            return true;
        }
    }

    function editPost(id, photoPost) {
        var flag = false;
        var hashtagsFlag = true;
        var likeFlag = true;
        for (var i = 0; i < photoPosts.length; i++) {
            if (photoPosts[i].id == id) {
                var index = i;
                flag = true;
                break;
            }
        }
        if (flag) {
            if (photoPost.author) {
                photoPosts[index].author = photoPost.author;
            }
            if (photoPost.descriprion) {
                photoPosts[index].descriprion = photoPost.descriprion;
            }
            if (photoPost.photoLink) {
                photoPosts[index].photoLink = photoPost.photoLink;
            }
            if (photoPost.hashtags) {
                for (var i = 0; i < photoPost.hashtags.length; i++) {
                    if (photoPost.hashtags[i] == '') {
                        hashtagsFlag = false;
                    }
                }
                for (var j = 0; j < photoPost.hashtags.length; j++) {
                    if (photoPost.hashtags[j].charAt(0) != '#') {
                        hashtagsFlag = false;
                    }
                }
                if (hashtagsFlag) {
                    photoPosts[index].hashtags = photoPost.hashtags;
                }
            }
            if (photoPost.createdAt) {
                photoPosts[index].createdAt = photoPost.createdAt;
            }
            if (photoPost.likes) {
                for (var i = 0; i < photoPost.likes.length; i++) {
                    if (photoPost.likes[i] == '') {
                        likeFlag = false;
                    }
                }
                if (likeFlag) {
                    photoPosts[index].likes = photoPost.likes;
                }
            }
            if ((!likeFlag) || (!hashtagsFlag)) {
                flag = false;
            }
        }
        return flag;
    }

    return {
        getPhotoPosts: get,
        getPhotoPost: getOnePost,
        validatePhotoPost: validate,
        addPhotoPost: addPost,
        removePhotoPost: removePost,
        editPhotoPost: editPost
    }
}());

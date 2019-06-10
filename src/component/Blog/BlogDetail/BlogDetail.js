import React, { Component } from 'react';
import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";
import BlogSlideBar from './BlogSlideBar'
import ".././_style_blog.scss"

class BlogDetail extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (

            <div className="container mg-top-80">

                <div className="row blog-entries">
                    <div className="col-md-12 col-lg-8 main-content">
                        <h1 className="mb-4">There’s a Cool New Way for Men to Wear Socks and Sandals</h1>
                        <div className="post-meta">
                            <span className="category">Food</span>
                            <span className="mr-2">March 15, 2018 </span>
                        </div>

                        <div className="post-content-body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium nam quas inventore,
                                ut iure iste modi eos adipisci ad ea itaque labore earum autem nobis et numquam, minima
                                eius. Nam eius, non unde ut aut sunt eveniet rerum repellendus porro.</p>
                            <p>Sint ab voluptates itaque, ipsum porro qui obcaecati cumque quas sit vel. Voluptatum
                                provident id quis quo. Eveniet maiores perferendis officia veniam est laborum, expedita
                                fuga doloribus natus repellendus dolorem ab similique sint eius cupiditate
                                necessitatibus, magni nesciunt ex eos.</p>
                            <p>Quis eius aspernatur, eaque culpa cumque reiciendis, nobis at earum assumenda similique
                                ut? Aperiam vel aut, ex exercitationem eos consequuntur eaque culpa totam, deserunt,
                                aspernatur quae eveniet hic provident ullam tempora error repudiandae sapiente illum
                                rerum itaque voluptatem. Commodi, sequi.</p>
                            <div className="row mb-5">
                                <div className="col-md-12 mb-4 element-animate">
                                    <img src="img/img_blog_example/img_7.jpg" alt="Image placeholder" className="img-fluid"/>
                                </div>
                                <div className="col-md-6 mb-4 element-animate">
                                    <img src="img/img_blog_example/img_9.jpg" alt="Image placeholder" className="img-fluid"/>
                                </div>
                                <div className="col-md-6 mb-4 element-animate">
                                    <img src="img/img_blog_example/img_11.jpg" alt="Image placeholder" className="img-fluid"/>
                                </div>
                            </div>
                            <p>Quibusdam autem, quas molestias recusandae aperiam molestiae modi qui ipsam vel. Placeat
                                tenetur veritatis tempore quos impedit dicta, error autem, quae sint inventore ipsa
                                quidem. Quo voluptate quisquam reiciendis, minus, animi minima eum officia doloremque
                                repellat eos, odio doloribus cum.</p>
                            <p>Temporibus quo dolore veritatis doloribus delectus dolores perspiciatis recusandae
                                ducimus, nisi quod, incidunt ut quaerat, magnam cupiditate. Aut, laboriosam magnam,
                                nobis dolore fugiat impedit necessitatibus nisi cupiditate, quas repellat itaque
                                molestias sit libero voluptas eveniet omnis illo ullam dolorem minima.</p>
                            <p>Porro amet accusantium libero fugit totam, deserunt ipsa, dolorem, vero expedita illo
                                similique saepe nisi deleniti. Cumque, laboriosam, porro! Facilis voluptatem sequi nulla
                                quidem, provident eius quos pariatur maxime sapiente illo nostrum quibusdam aliquid
                                fugiat! Earum quod fuga id officia.</p>
                            <p>Illo magnam at dolore ad enim fugiat ut maxime facilis autem, nulla cumque quis commodi
                                eos nisi unde soluta, ipsa eius aspernatur sint atque! Nihil, eveniet illo ea, mollitia
                                fuga accusamus dolor dolorem perspiciatis rerum hic, consectetur error rem
                                aspernatur!</p>

                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus magni explicabo id
                                molestiae, minima quas assumenda consectetur, nobis neque rem, incidunt quam tempore
                                perferendis provident obcaecati sapiente, animi vel expedita omnis quae ipsa! Obcaecati
                                eligendi sed odio labore vero reiciendis facere accusamus molestias eaque impedit,
                                consequuntur quae fuga vitae fugit?</p>
                        </div>
                        <div className="pt-5">
                            <p>Categories: <a href="#">Food</a>, <a href="#">Travel</a> Tags: <a
                                href="#">#manila</a>, <a href="#">#asia</a></p>
                        </div>
                    </div>

                    <div className="mg-top-80">
                    <BlogSlideBar/>
                    </div>
                </div>
            </div>



        );

    }
}

export default BlogDetail;
<script setup>
</script>
<template>
  <section class="single_page page-top">
    <div class="container">
      <div class="single_page-raw">
        <div class="single_page-sidebar">
          <div class="single_page-nav">
            <h1 class="page-title">Медиа</h1>

            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="single_page-nav_icon"
            >
              <path
                d="M0.5 0.5H5.5V5.42589H0.5V0.5ZM10.5 0.5H15.5V5.42589H10.5V0.5ZM20.5 0.5H25.5V5.42589H20.5V0.5ZM0.5 10.6334H5.5V15.5593H0.5V10.6334ZM0.5 20.5741H5.5V25.5H0.5V20.5741ZM10.5 20.5741H15.5V25.5H10.5V20.5741ZM20.5 20.5741H25.5V25.5H20.5V20.5741ZM10.5 10.6334H15.5V15.5593H10.5V10.6334ZM20.5 10.6334H25.5V15.5593H20.5V10.6334Z"
                stroke="white"
                stroke-opacity="0.5"
              />
            </svg>
          </div>

          <div class="single_page-pag">
            <a href="#" class="single_page-pag-item prev">
              <svg
                width="14"
                height="10"
                viewBox="0 0 14 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.25 6.5091e-07L6.475 1.20833L3.36875 4.16667L14 4.16667L14 5.83333L3.36875 5.83333L6.475 8.79167L5.25 10L-5.13696e-07 5L5.25 6.5091e-07Z"
                  fill="white"
                  fill-opacity="0.5"
                />
              </svg>
              <span>Предыдущая</span>
            </a>
            <a href="#" class="single_page-pag-item next">
              <span>Следующая</span>
              <svg
                width="14"
                height="10"
                viewBox="0 0 14 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.75 10L7.525 8.79167L10.6312 5.83333H0V4.16667H10.6312L7.525 1.20833L8.75 0L14 5L8.75 10Z"
                  fill="white"
                  fill-opacity="0.5"
                />
              </svg>
            </a>
          </div>
        </div>
        <div>
          <img
            src="@/assets/img/single-news-img.jpg"
            alt="image"
            class="single_page-cover"
          />
          <span class="single_page-date">11 ноября 2022</span>
          <div class="single_page-content">
            <h1>Юристы оценили новые правила судебно-медицинской экспертизы</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium, deleniti, temporibus ullam impedit reiciendis
              suscipit natus, eligendi dolorem officia nulla perspiciatis iusto
              velit repudiandae corrupti accusantium dolor veniam ipsa! Quisquam
              sint doloribus dicta ducimus facere reiciendis aperiam, hic alias,
              sunt consequatur accusantium nisi inventore natus. Nobis sequi
              earum eveniet eum.
            </p>
            <br />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Necessitatibus velit ab neque laborum rerum labore animi
              consectetur maxime excepturi voluptatibus. Voluptas magni numquam
              voluptates sequi iusto impedit nesciunt! Aliquam qui corporis cum
              maxime quae quidem odio hic a excepturi voluptatem? Repellat
              pariatur magni distinctio totam. Fuga, minus error. Assumenda,
              suscipit ab ullam nobis porro aspernatur eaque odit id modi beatae
              eum asperiores quisquam! Dolor, maiores ut eveniet reprehenderit
              exercitationem earum velit ipsam animi necessitatibus accusantium,
              labore officiis eos aliquam aspernatur! Sequi rem vero quod minus
              ex! Enim qui laboriosam dolorum sint consequuntur incidunt
              assumenda neque eaque, provident est a illum.
            </p>
          </div>

          <div class="single_page-author">
            <div class="author_photo">
              <img src="@/assets/img/dev_images/author.png" alt="">
            </div>
            <p class="author_name">
              Адвокат МКА «Аронов и партнеры»<br>Иван Александров
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.single_page {
  padding-bottom: 120px;
}
.single_page-raw {
  display: grid;
  grid-template-columns: 25% 1fr;
  gap: 30px;
  @media screen and (max-width: 1100px) {
    grid-template-columns: 100%;
  }
}
.single_page-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.single_page-pag {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 64px;
  &-item {
    display: flex;
    align-items: center;
    gap: 10px;
    span {
      font-size: 14px;
      font-weight: 300;
      opacity: 0.5;
    }
  }
}
.single_page-nav_icon {
  cursor: pointer;
}

.single_page-cover {
  width: 100%;
  height: auto;
  margin-bottom: 60px;
}

.single_page-date {
  color: var(--accent-color);
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 30px;
  display: block;
}

.single_page-content {
  h1 {
    padding-bottom: 20px;
    font-size: 28px;
    font-weight: 700;
    @media screen and (max-width: 1100px) {
      font-size: 24px;
      font-weight: 600;
    }
  }
  p {
    color: #fff;
    line-height: 1.5;
    font-size: 16px;
  }
}

.single_page-author {
  display: flex;
  align-items: center;
  gap: 60px;
  margin-top: 60px;
  .author_photo {
    position: relative;
    border-radius: 50%;
    overflow: hidden;
    width: 120px;
    height: 120px;
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;

    }
    @media screen and (max-width: 1100px) {
      width: 60px;
      height: 60px;
    }
  
  }
  .author_name {
    font-size: 16px;
    font-weight: 300;
  }
  @media screen and (max-width: 1100px) {
    gap: 15px;
  }
}
</style>
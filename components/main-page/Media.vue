<template>
  <section class="media section-top">
    <div class="container">
      <h2 class="section-title">Медиа</h2>
      <div class="media-content">
        <div class="media-item">
          <img
            src="@/assets/img/media-thumb.jpg"
            alt="media-thumbnail"
            class="media-item-thumb"
          />
          <div class="media-item-header">
            <p>Семейное / наследственное право</p>
          </div>
          <div class="media-item-body">
            <h3 class="media-item-date">11.11.2022</h3>
            <h3 class="media-item-title">Прошла конференция Право.Ру</h3>
            <p class="media-item-content">
              Юристы и адвокаты обсуждали актуальные риски для директоров и
              бенефициаров. А также объяснили, как избежать претензий со стороны
              следствия при получении господдержки.
            </p>
          </div>
          <NuxtLink to="#" class="media-item-link"
            >Читать далее
            <svg
              width="14"
              height="10"
              viewBox="0 0 14 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.75 10L7.525 8.79167L10.6312 5.83333H0V4.16667H10.6312L7.525 1.20833L8.75 0L14 5L8.75 10Z"
                fill="#038DFF"
              /></svg
          ></NuxtLink>
        </div>

        <div class="media-item">
          <img
            src="@/assets/img/media-thumb.jpg"
            alt="media-thumbnail"
            class="media-item-thumb"
          />
          <div class="media-item-header">
            <p>Семейное / наследственное право</p>
          </div>
          <div class="media-item-body">
            <h3 class="media-item-date">11.11.2022</h3>
            <h3 class="media-item-title">Прошла конференция Право.Ру</h3>
            <p class="media-item-content">
              Юристы и адвокаты обсуждали актуальные риски для директоров и
              бенефициаров. А также объяснили, как избежать претензий со стороны
              следствия при получении господдержки.
            </p>
          </div>
          <NuxtLink to="#" class="media-item-link"
            >Читать далее
            <svg
              width="14"
              height="10"
              viewBox="0 0 14 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.75 10L7.525 8.79167L10.6312 5.83333H0V4.16667H10.6312L7.525 1.20833L8.75 0L14 5L8.75 10Z"
                fill="#038DFF"
              />
            </svg>
          </NuxtLink>
        </div>

        <div class="media-item no-image">
          <!-- <img
            src="@/assets/img/media-thumb.jpg"
            alt="media-thumbnail"
            class="media-item-thumb"
          /> -->
          <div class="media-item-header">
            <p>Семейное / наследственное право</p>
          </div>
          <div class="media-item-body">
            <h3 class="media-item-date">11.11.2022</h3>
            <h3 class="media-item-title">Прошла конференция Право.Ру</h3>
            <p class="media-item-content">
              Юристы и адвокаты обсуждали актуальные риски для директоров и
              бенефициаров. А также объяснили, как избежать претензий со стороны
              следствия при получении господдержки.
            </p>
          </div>
          <NuxtLink to="#" class="media-item-link"
            >Читать далее
            <svg
              width="14"
              height="10"
              viewBox="0 0 14 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.75 10L7.525 8.79167L10.6312 5.83333H0V4.16667H10.6312L7.525 1.20833L8.75 0L14 5L8.75 10Z"
                fill="#038DFF"
              />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.media-content {
  display: grid;
  width: 100%;
  gap: 30px;
  grid-template-columns: 1fr 1fr 1fr;
}
.media-item {
  background: #fff;
  padding: 60px 60px 80px 60px;
  width: 100%;
  position: relative;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
  justify-content: flex-end;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  transition: background-color .3s ease;
  &-thumb {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    object-fit: cover;
    opacity: 0;
    z-index: 1;
    transition: opacity 0.2s ease;
    
  }
  &-header {
    font-size: 12px;
    font-weight: 400;
    color: #038dff;
    opacity: 1;
    margin-bottom: 60px;
  }
  &-date {
    font-size: 20px;
    font-weight: 800;
    color: #212121;
    position: relative;
    z-index: 2;
    transition: color 0.1s ease;
  }
  &-title {
    font-size: 20px;
    font-weight: 600;
    margin-top: 8px;
    margin-bottom: 10px;
    color: #212121;
    position: relative;
    z-index: 2;
    transition: color 0.1s ease;
  }
  &-content {
    font-size: 14px;
    font-weight: 400;
    color: #212121;
    // margin-top: 10px;
    // max-height: 500px;
    overflow: hidden;
    transition: opacity .2s ease
    // transition: max-height .4s ease-in, opacity .2s ease
  }
  &-link {
    font-size: 16px;
    font-weight: 500;
    color: #038dff;
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 40px;
    position: relative;
    z-index: 2;
    transition: color 0.1s ease;
    svg {
      path {
        transition: fill 0.1s ease;
      }
    }
  }
}

.media-item:hover {
  .media-item-header {
    opacity: 0;
  }
  .media-item-title {
    color: #fff;
  }
  .media-item-date {
    color: #fff;
  }
  .media-item-link {
    color: #fff;
    svg {
      path {
        fill: #fff;
      }
    }
  }
  .media-item-content {
    opacity: 0; 
    transition: opacity .2s ease
  }
  .media-item-thumb {
    opacity: 0.9;
    transition: opacity 0.4s ease;
  }
}

.media-item.no-image:hover {
  background-color: var(--accent-color);
  transition: background-color .3s ease;
}
</style>
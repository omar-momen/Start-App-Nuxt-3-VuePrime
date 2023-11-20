<template>
  <footer
    class="theFooter flex flex-wrap bg-[--main_bg] p-6 text-center md:text-start"
  >
    <div class="footer_section basis-full max-md:mb-4 md:basis-1/4">
      <logo alt="footer logo" class="logo mb-3 flex max-md:justify-center" />

      <p class="copyright">
        Copyright &copy; {{ new Date().getFullYear() }} All Rights Reserved |
        <br />
        Made With
        <Icon
          class="text-red-500"
          aria-label="heart icon"
          name="material-symbols:favorite"
        />
        By
        <span class="colored"
          ><a target="_blank" href="https://www.linkedin.com/in/omar-momen23/"
            >Omar Momen</a
          ></span
        >
      </p>
    </div>

    <div class="footer_section basis-full max-md:my-4 md:basis-1/4">
      <h3 class="h_3">Company Info</h3>
      <ul class="links">
        <li>About Us</li>
        <li>How to Shop</li>
        <li>FAQs</li>
        <li>Terms of Service</li>
      </ul>
    </div>

    <div class="footer_section basis-full max-md:my-4 md:basis-1/4">
      <h3 class="h_3">Help & Support</h3>
      <ul class="links">
        <li>Returns</li>
        <li>Contact Us</li>
        <li>Size Guide</li>
        <li>Returns Policy</li>
      </ul>
    </div>

    <div class="footer_section basis-full max-md:mt-4 md:basis-1/4">
      <h3 class="h_3">Newsletter</h3>
      <div class="mail">
        <!-- <base-input
          v-model="email"
          name="email"
          variant="solo"
          single-line
          type="email"
          label="Your Email Here"
        >
          <template #appendInner>
            <BaseButton aria-label="SUBSCRIBE" class="inputButton"
              >SUBSCRIBE</BaseButton
            >
          </template>
        </base-input> -->
      </div>
      <h3 class="h_3">Download the App</h3>
      <div class="icons">
        <span class="apple"
          ><a aria-label="apple store link" href="https://github.com/omar-momen"
            ><Icon name="mdi:apple" /></a
        ></span>
        <span class="andriod"
          ><a
            aria-label="andriod store link"
            href="https://github.com/omar-momen"
            ><Icon name="bi:android2" /></a
        ></span>
      </div>
    </div>

    <hr class="my-[30px] w-full" />

    <div class="socials flex w-full justify-center">
      <span class="facebook"
        ><a aria-label="facebook link" href="https://github.com/omar-momen"
          ><Icon name="ri:facebook-fill" /></a
      ></span>
      <span class="instagram"
        ><a aria-label="instagram link" href="https://github.com/omar-momen"
          ><Icon name="ion:logo-instagram" /></a
      ></span>
      <span class="twitter"
        ><a aria-label="twitter link" href="https://github.com/omar-momen"
          ><Icon name="bi:twitter" /></a
      ></span>
      <span class="youtube"
        ><a aria-label="youtube link" href="https://github.com/omar-momen"
          ><Icon name="bi:youtube" /></a
      ></span>
      <span class="whatsApp"
        ><a aria-label="whatsApp link" href="https://github.com/omar-momen"
          ><Icon name="ic:outline-whatsapp" /></a
      ></span>
      <span class="tiktok"
        ><a aria-label="tiktok link" href="https://github.com/omar-momen"
          ><Icon name="formkit:tiktok" /></a
      ></span>
      <span class="linkedin"
        ><a aria-label="linkedin link" href="https://github.com/omar-momen"
          ><Icon name="akar-icons:linkedin-box-fill" /></a
      ></span>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
ul.links {
  li {
    margin-bottom: 3px;
    color: var(--main_txt);
    cursor: pointer;

    &:hover {
      transition: color 0.2s linear;
      color: var(--main_txt);
    }
  }
}

.icons {
  span {
    svg.icon {
      color: #909eac;
      font-size: 25px;
      margin-inline-end: 7px;
    }

    &:hover {
      &.apple {
        svg.icon {
          color: var(--appple);
        }
      }
      &.andriod {
        svg.icon {
          color: var(--andriod);
        }
      }
    }
  }
}

.socials {
  span {
    margin-inline: 30px;

    @media (max-width: 700px) {
      margin-inline: 11px;
    }

    svg.icon {
      color: #909eac;
      font-size: 32px;
      transition: color 0.3s ease-in-out;
    }

    &:hover {
      &.facebook {
        svg.icon {
          color: var(--facebook);
        }
      }
      &.tiktok {
        svg.icon {
          color: var(--tiktok);
        }
      }
      &.instagram {
        svg.icon {
          color: var(--instagram);
        }
      }
      &.youtube {
        svg.icon {
          color: var(--youtube);
        }
      }
      &.linkedin {
        svg.icon {
          color: var(--linkedin);
        }
      }
      &.whatsApp {
        svg.icon {
          color: var(--whatsApp);
        }
      }
      &.twitter {
        svg.icon {
          color: var(--twitter);
        }
      }
    }
  }
}
</style>

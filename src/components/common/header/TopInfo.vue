<script setup lang="ts">
import { PhoneCallIcon } from 'lucide-vue-next';
</script>

<template>
  <div class="top-info">
    <div class="top-info__slogan">
      {{ 'GZ JSM Business Services Co., Ltd' }}
    </div>
    <div class="top-info__contact">
      <PhoneCallIcon class="top-info__contact__phone-icon" />
      <div class="top-info__contact__detail">
        <div class="top-info__contact__detail__row">
          {{ 'Cell: (0086) 135 0300 2464' }}
        </div>
        <div class="top-info__contact__detail__row">
          {{ 'Email:zoezhu@jsmbsc.com' }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.top-info {
  padding: 20px 100px 20px 50px;
  background-color: #F0F8FF;
  flex-wrap: wrap;
  @include flex-layout(row, space-between, center);

  &__slogan {
    margin-right: 24px;
    font-size: xx-large;
    font-weight: 800;
    background: linear-gradient(90deg, #4CA1FF, #74D0FF);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  &__contact {
    margin: 12px 0;
    color: #5A5A5A;
    @include flex-center(row);

    &__phone-icon {
      width: 40px;
      height: 40px;
    }

    &__detail {
      margin-left: 16px;
      @include flex-center(column);

      &__row {
        &:not(:last-child) {
          margin-bottom: 4px;
        }
      }
    }
  }
}
</style>

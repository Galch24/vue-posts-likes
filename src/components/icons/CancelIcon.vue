<template>
  <svg
    class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-18wq8ra"
    focusable="false"
    aria-hidden="true"
    viewBox="0 0 24 24"
    data-testid="CancelOutlinedIcon"
    tabindex="-1"
    title="CancelOutlined"
    :width="width"
    :height="height"
  >
    <path
      d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z"
    ></path>
  </svg>
</template>

<script>
export default {
  name: "CancelIcon",
  props: {
    width: {
      type: [Number, String],
      default: "24",
    },
    height: {
      type: [Number, String],
      default: "24",
    },
  },
};
</script>

<style scoped></style>

<template>
  <svg
    class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-18wq8ra"
    focusable="false"
    aria-hidden="true"
    viewBox="0 0 24 24"
    data-testid="ClearOutlinedIcon"
    tabindex="-1"
    title="ClearOutlined"
    :width="width"
    :height="height"
  >
    <path
      d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
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

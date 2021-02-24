export default () => {
  if(process.client) {
    console.log('browser');
  } else {
    console.log('SSR');
  }
}
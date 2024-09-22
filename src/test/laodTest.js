const axios = require('axios');

const videoURL = 'https://scontent.cdninstagram.com/o1/v/t16/f1/m86/7B4CCF5BD1FA8F38DAA9458CD56DB1AD_video_dashinit.mp4?stp=dst-mp4&efg=eyJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSIsInZlbmNvZGVfdGFnIjoidnRzX3ZvZF91cmxnZW4uY2xpcHMuYzIuNzIwLmJhc2VsaW5lIn0&_nc_cat=100&vs=882744690387759_3902629857&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC83QjRDQ0Y1QkQxRkE4RjM4REFBOTQ1OENENTZEQjFBRF92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dPbklVQnZmVXoxaklVd2VBUHVsOFotVzRyaDdicV9FQUFBRhUCAsgBACgAGAAbABUAACbGwpeThqTfPxUCKAJDMywXQEi9si0OVgQYEmRhc2hfYmFzZWxpbmVfMV92MREAdf4HAA%3D%3D&_nc_rid=ec932d22b2&ccb=9-4&oh=00_AYC9pLbluN3J9WjhY1rYpO_4RxZa2l91p9PrGsTHI4Z1sA&oe=66F1FFFA&_nc_sid=10d13b';

async function hitVideoURL() {
  try {
    const response = await axios.get(videoURL);
    console.log(`Status: ${response.status}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

// Function to hit the video URL 100 times every second
async function runTest() {
  const totalCallsPerSecond = 2; // Number of calls per second
  let totalCalls = 0; // Keep track of all calls made

  const interval = setInterval(async () => {
    // Create an array of promises for 100 concurrent requests
    const requests = Array.from({ length: totalCallsPerSecond }, () => hitVideoURL());

    // Wait for all 100 requests to complete
    await Promise.allSettled(requests);

    totalCalls += totalCallsPerSecond;
    console.log(`Total requests made so far: ${totalCalls}`);

    if (totalCalls >= 1000) {  // Stop after 1000 requests (adjust this limit)
      clearInterval(interval);
      console.log("Test completed after 1000 requests.");
    }
  }, 1000);  // 1-second interval
}

runTest();

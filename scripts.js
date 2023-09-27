function downloadResume() {
    // Create a download link
    const link = document.createElement("a");
    link.href = "Stefan_Tuczynski_Resume.pdf"; // Replace with the actual file name and extension
    link.download = "Stefan Tuczynski Resume.pdf"; // You can specify the desired download file name

    // Click the link to trigger the download
    link.click();
}

// Attach the downloadResume function to the button click event
const downloadButton = document.getElementById("downloadbutton");
downloadButton.addEventListener("click", downloadResume);
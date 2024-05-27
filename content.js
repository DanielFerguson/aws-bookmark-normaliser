const RENAME_MAP = {
    "CodePipeline": "Pipeline",
    "CodeBuild": "Build",
    "Elastic Container Service": "ECS",
    "Elastic Container Registry": "ECR",
    "Simple Queue Service": "SQS",
    "Secrets Manager": "Secrets",
    "Amazon Comprehend": "Comprehend",
    "Amazon Translate": "Translate",
    "Amazon Transcribe": "Transcribe",
    "Amazon Translate": "Translate",
    "Amazon Transcribe": "Transcribe",
    "Amazon Bedrock": "Bedrock",
};

let completed = false;

(function () {
    function updateBookmarkNames() {
        const bookmarks = document.querySelectorAll('li[class^="globalNav-"]>a>div>span');

        if (bookmarks.length > 0) {
            completed = true;
        }

        bookmarks.forEach(bookmark => {
            const text = bookmark.innerText;
            if (RENAME_MAP.hasOwnProperty(text)) {
                bookmark.innerText = RENAME_MAP[text];
            }
        });
    }

    const intervalId = setInterval(() => {
        if (completed) {
            clearInterval(intervalId);
        } else {
            updateBookmarkNames();
        }
    }, 500);
})();


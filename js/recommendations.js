function getRecommendations() {
    console.log("getRecommendations function is triggered!"); 

    const q1Element = document.querySelector('input[name="q1"]:checked');
    const q2Element = document.querySelector('input[name="q2"]:checked');
    const q3Element = document.querySelector('input[name="q3"]:checked');

    if (!q1Element || !q2Element || !q3Element) {
        console.log("One or more questions are not answered.");
        document.getElementById('recommendations').innerHTML = '<p>Please answer all questions to get recommendations.</p>';
        return;
    }

    const q1 = q1Element.value;
    const q2 = q2Element.value;
    const q3 = q3Element.value;

    let recommendations = '';

    // Analyze the responses and generate recommendations
    if (q1 === 'often') {
        recommendations += '<p>It seems like you often feel stressed. We recommend practicing mindfulness meditation daily and considering Cognitive Behavioral Therapy (CBT) to manage stress.</p>';
    } else if (q1 === 'sometimes') {
        recommendations += '<p>It appears that you sometimes feel stressed. Incorporating deep breathing exercises and regular breaks during your day might help.</p>';
    } else {
        recommendations += '<p>It’s great that you rarely feel stressed. Continue maintaining your healthy lifestyle!</p>';
    }

    if (q2 === 'poor') {
        recommendations += '<p>Your sleep quality seems poor. Try to establish a regular sleep schedule, reduce screen time before bed, and consider relaxation techniques like reading or taking a warm bath before bed.</p>';
    } else if (q2 === 'average') {
        recommendations += '<p>Your sleep is average. You might benefit from improving your sleep environment, such as keeping your room dark and quiet.</p>';
    } else {
        recommendations += '<p>You seem to sleep well. Keep up the good work and continue with your healthy sleep habits.</p>';
    }

    if (q3 === 'daily') {
        recommendations += '<p>It’s great that you exercise daily! Regular physical activity is fantastic for both mental and physical health.</p>';
    } else if (q3 === 'weekly') {
        recommendations += '<p>Exercising weekly is good, but try to incorporate more physical activity into your daily routine for even better health benefits.</p>';
    } else {
        recommendations += '<p>You might want to consider exercising more often. Even a short walk every day can significantly improve your well-being.</p>';
    }

    // Display the recommendations
    document.getElementById('recommendations').innerHTML = recommendations;
}

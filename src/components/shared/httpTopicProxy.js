const topicsUrl = 'http://localhost:3600/topics';

const updateTopic = async (topicId, data = {}) => {
  const response = await fetch(`${topicsUrl}/${topicId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return response.json();
}

const refreshTopics = async () => {
  const response = await fetch(topicsUrl);
  return response.json();
}

const deleteTopic = async (topicId) => {
  const response = await fetch(`${topicsUrl}/${topicId}`, {
    method: 'DELETE',
    body: {}
  });
  return response.json();
}

export {updateTopic, refreshTopics, deleteTopic};

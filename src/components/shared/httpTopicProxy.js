const topicsUrl = 'http://localhost:3600/topics';

const createTopic = async (topicData = {}) => {
  const response = await fetch(topicsUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(topicData)
  });

  return response.json();
}

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

const refreshTopics = async (params={}) => {
  let url = new URL(topicsUrl);
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
  const response = await fetch(url);
  return response.json();
}

const activeTopics = async () => {
  return refreshTopics({status: 'active'});
};

const archivedTopics = async () => {
  return refreshTopics({status: 'archived'});
};

const deleteTopic = async (topicId) => {
  const response = await fetch(`${topicsUrl}/${topicId}`, {
    method: 'DELETE',
    body: {}
  });
  return response.json();
}

export {updateTopic, refreshTopics, activeTopics, archivedTopics, deleteTopic, createTopic};

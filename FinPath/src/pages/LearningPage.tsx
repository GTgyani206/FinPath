import { Card, CardContent, Typography } from '@mui/material';

const LearningModules = () => {
  const modules = [
    { title: 'Budgeting Basics', description: 'Learn how to create and manage your budget.' },
    { title: 'Saving Strategies', description: 'Tips and tricks for effective savings.' },
    { title: 'Debt Management', description: 'Understand how to manage and reduce debt.' },
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Learning Modules</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {modules.map((module) => (
          <Card key={module.title} className="shadow-lg rounded-lg p-4">
            <CardContent>
              <Typography variant="h5">{module.title}</Typography>
              <Typography variant="body2">{module.description}</Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LearningModules;

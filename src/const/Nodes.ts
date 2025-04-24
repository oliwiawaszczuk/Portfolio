const database_point = {x: -700, y: 150}
const database_color = '#6db53f'

const frontend_point = { x: 900, y: 150 }
const frontend_color = '#51d1ff'

const backend_point = { x: 0, y: 150 }
const backend_color = '#a273dc'

const game_point = { x: -1000, y: 150 }
const game_color = '#ffba6b'

export const initialNodes = [
    { id: '1', position: { x: 0, y: 0 }, data: { label: 'Knowledge graph' }, style: { backgroundColor: '#ffc951', color: 'black', fontWeight: 'bold' } },

    { id: '2', position: frontend_point, data: { label: 'Frontend' }, style: { backgroundColor: frontend_color, color: 'black', fontWeight: 'bold' } },
    { id: '3', position: backend_point, data: { label: 'Backend' }, style: { backgroundColor: backend_color, color: 'black', fontWeight: 'bold' } },
    { id: '4', position: database_point, data: { label: 'Database' }, style: { backgroundColor: database_color, color: 'black', fontWeight: 'bold' } },
    { id: '5', position: game_point, data: { label: 'Game' }, style: { backgroundColor: game_color, color: 'black', fontWeight: 'bold' } },

    // GAMES
    { id: '6', position: { x: game_point.x, y: game_point.y+100 }, data: { label: 'Godot' }, style: { backgroundColor: game_color, color: 'black' } },
    { id: '7', position: { x: game_point.x, y: game_point.y+180 }, data: { label: 'Unity' }, style: { backgroundColor: game_color, color: 'black' } },
    { id: '8', position: { x: game_point.x, y: game_point.y+260 }, data: { label: 'Unreal Engine' }, style: { backgroundColor: game_color, color: 'black' } },

    // DATABASE
    { id: '9', position: { x: database_point.x-100, y: database_point.y+100 }, data: { label: 'Relation' }, style: { backgroundColor: database_color, color: 'black', fontWeight: 'bold' } },
    { id: '10', position: { x: database_point.x+100, y: database_point.y+100 }, data: { label: 'Data Serialization' }, style: { backgroundColor: database_color, color: 'black', fontWeight: 'bold' } },
    { id: '11', position: { x: database_point.x-100, y: database_point.y+180 }, data: { label: 'MySQL' }, style: { backgroundColor: database_color, color: 'black' } },
    { id: '12', position: { x: database_point.x-100, y: database_point.y+260 }, data: { label: 'SQLite' }, style: { backgroundColor: database_color, color: 'black' } },
    { id: '13', position: { x: database_point.x-100, y: database_point.y+340 }, data: { label: 'Postgres' }, style: { backgroundColor: database_color, color: 'black' } },
    { id: '14', position: { x: database_point.x+100, y: database_point.y+180 }, data: { label: 'XML' }, style: { backgroundColor: database_color, color: 'black' } },
    { id: '15', position: { x: database_point.x+100, y: database_point.y+260 }, data: { label: 'JSON' }, style: { backgroundColor: database_color, color: 'black' } },

    // BACKEND
    { id: '16', position: {x: backend_point.x, y: backend_point.y+80}, data: { label: 'Python' }, style: { backgroundColor: backend_color, color: 'black', fontWeight: 'bold' } },
    { id: '17', position: {x: backend_point.x-400, y: backend_point.y+180}, data: { label: 'Framework' }, style: { backgroundColor: backend_color, color: 'black', fontWeight: 'bold' } },
    { id: '18', position: {x: backend_point.x-200, y: backend_point.y+180}, data: { label: 'Database ORM' }, style: { backgroundColor: backend_color, color: 'black', fontWeight: 'bold' } },
    { id: '19', position: {x: backend_point.x, y: backend_point.y+180}, data: { label: 'API' }, style: { backgroundColor: backend_color, color: 'black', fontWeight: 'bold' } },
    { id: '20', position: {x: backend_point.x+200, y: backend_point.y+180}, data: { label: 'Auth' }, style: { backgroundColor: backend_color, color: 'black', fontWeight: 'bold' } },
    { id: '21', position: {x: backend_point.x+400, y: backend_point.y+180}, data: { label: 'Testing' }, style: { backgroundColor: backend_color, color: 'black', fontWeight: 'bold' } },
    { id: '22', position: {x: backend_point.x-400, y: backend_point.y+260}, data: { label: 'Flask' }, style: { backgroundColor: backend_color, color: 'black', fontWeight: 'bold' } },
    { id: '23', position: {x: backend_point.x-400, y: backend_point.y+340}, data: { label: 'Routing' }, style: { backgroundColor: backend_color, color: 'black' } },
    { id: '24', position: {x: backend_point.x-400, y: backend_point.y+420}, data: { label: 'Middleware' }, style: { backgroundColor: backend_color, color: 'black' } },
    { id: '25', position: {x: backend_point.x-400, y: backend_point.y+500}, data: { label: 'SocketIO' }, style: { backgroundColor: backend_color, color: 'black' } },
    { id: '26', position: {x: backend_point.x-200, y: backend_point.y+260}, data: { label: 'SQLAlchemy' }, style: { backgroundColor: backend_color, color: 'black' } },
    { id: '27', position: {x: backend_point.x-200, y: backend_point.y+340}, data: { label: 'Alembic' }, style: { backgroundColor: backend_color, color: 'black' } },
    { id: '28', position: {x: backend_point.x, y: backend_point.y+260}, data: { label: 'REST API' }, style: { backgroundColor: backend_color, color: 'black' } },
    { id: '29', position: {x: backend_point.x+200, y: backend_point.y+260}, data: { label: 'bcrypt' }, style: { backgroundColor: backend_color, color: 'black' } },
    { id: '30', position: {x: backend_point.x+200, y: backend_point.y+340}, data: { label: 'JWT' }, style: { backgroundColor: backend_color, color: 'black' } },
    { id: '31', position: {x: backend_point.x+400, y: backend_point.y+260}, data: { label: 'PyTest' }, style: { backgroundColor: backend_color, color: 'black' } },
    { id: '32', position: {x: backend_point.x+400, y: backend_point.y+340}, data: { label: 'Postman' }, style: { backgroundColor: backend_color, color: 'black' } },
    { id: '51', position: {x: backend_point.x-400, y: backend_point.y+580}, data: { label: 'Node.js' }, style: { backgroundColor: backend_color, color: 'black' } },

    // FRONTEND
    { id: '33', position: {x: frontend_point.x-300, y: frontend_point.y+100}, data: { label: 'Framework' }, style: { backgroundColor: frontend_color, color: 'black', fontWeight: 'bold' } },
    { id: '34', position: {x: frontend_point.x-100, y: frontend_point.y+100}, data: { label: 'Core' }, style: { backgroundColor: frontend_color, color: 'black', fontWeight: 'bold' } },
    { id: '35', position: {x: frontend_point.x+100, y: frontend_point.y+100}, data: { label: 'API' }, style: { backgroundColor: frontend_color, color: 'black', fontWeight: 'bold' } },
    { id: '36', position: {x: frontend_point.x+300, y: frontend_point.y+100}, data: { label: 'Styling' }, style: { backgroundColor: frontend_color, color: 'black', fontWeight: 'bold' } },
    { id: '37', position: {x: frontend_point.x-300, y: frontend_point.y+180}, data: { label: 'React' }, style: { backgroundColor: frontend_color, color: 'black', fontWeight: 'bold' } },
    { id: '38', position: {x: frontend_point.x-300, y: frontend_point.y+260}, data: { label: 'Hooks' }, style: { backgroundColor: frontend_color, color: 'black' } },
    { id: '39', position: {x: frontend_point.x-300, y: frontend_point.y+340}, data: { label: 'Context API' }, style: { backgroundColor: frontend_color, color: 'black' } },
    { id: '40', position: {x: frontend_point.x-300, y: frontend_point.y+420}, data: { label: 'Zustand' }, style: { backgroundColor: frontend_color, color: 'black' } },
    { id: '41', position: {x: frontend_point.x-300, y: frontend_point.y+500}, data: { label: 'React Native' }, style: { backgroundColor: frontend_color, color: 'black', fontWeight: 'bold' } },
    { id: '42', position: {x: frontend_point.x-300, y: frontend_point.y+580}, data: { label: 'Expo' }, style: { backgroundColor: frontend_color, color: 'black', fontWeight: 'bold' } },
    { id: '43', position: {x: frontend_point.x-100, y: frontend_point.y+180}, data: { label: 'HTML' }, style: { backgroundColor: frontend_color, color: 'black' } },
    { id: '44', position: {x: frontend_point.x-100, y: frontend_point.y+260}, data: { label: 'JavaScript' }, style: { backgroundColor: frontend_color, color: 'black' } },
    { id: '45', position: {x: frontend_point.x-100, y: frontend_point.y+340}, data: { label: 'TypeScript' }, style: { backgroundColor: frontend_color, color: 'black' } },
    { id: '46', position: {x: frontend_point.x+100, y: frontend_point.y+180}, data: { label: 'Fetch' }, style: { backgroundColor: frontend_color, color: 'black' } },
    { id: '47', position: {x: frontend_point.x+100, y: frontend_point.y+260}, data: { label: 'Axios' }, style: { backgroundColor: frontend_color, color: 'black' } },
    { id: '48', position: {x: frontend_point.x+300, y: frontend_point.y+180}, data: { label: 'CSS' }, style: { backgroundColor: frontend_color, color: 'black' } },
    { id: '49', position: {x: frontend_point.x+300, y: frontend_point.y+260}, data: { label: 'Tailwind' }, style: { backgroundColor: frontend_color, color: 'black' } },
    { id: '50', position: {x: frontend_point.x+300, y: frontend_point.y+340}, data: { label: 'Material UI' }, style: { backgroundColor: frontend_color, color: 'black' } },
    { id: '52', position: {x: frontend_point.x-300, y: frontend_point.y+580}, data: { label: 'Next.js' }, style: { backgroundColor: frontend_color, color: 'black' } },
]
export const initialEdges = [
    { id: 'e1-2', source: '1', target: '2' },
    { id: 'e1-3', source: '1', target: '3' },
    { id: 'e1-4', source: '1', target: '4' },
    { id: 'e1-5', source: '1', target: '5' },
    { id: 'e5-6', source: '5', target: '6' },
    { id: 'e6-7', source: '6', target: '7' },
    { id: 'e7-8', source: '7', target: '8' },
    { id: 'e4-9', source: '4', target: '9' },
    { id: 'e4-10', source: '4', target: '10' },
    { id: 'e9-11', source: '9', target: '11' },
    { id: 'e11-12', source: '11', target: '12' },
    { id: 'e12-13', source: '12', target: '13' },
    { id: 'e10-14', source: '10', target: '14' },
    { id: 'e14-15', source: '14', target: '15' },
    { id: 'e3-16', source: '3', target: '16' },
    { id: 'e16-17', source: '16', target: '17' },
    { id: 'e16-18', source: '16', target: '18' },
    { id: 'e16-19', source: '16', target: '19' },
    { id: 'e16-20', source: '16', target: '20' },
    { id: 'e16-21', source: '16', target: '21' },
    { id: 'e17-22', source: '17', target: '22' },
    { id: 'e22-23', source: '22', target: '23' },
    { id: 'e23-24', source: '23', target: '24' },
    { id: 'e24-25', source: '24', target: '25' },
    { id: 'e18-26', source: '18', target: '26' },
    { id: 'e26-27', source: '26', target: '27' },
    { id: 'e19-28', source: '19', target: '28' },
    { id: 'e20-29', source: '20', target: '29' },
    { id: 'e29-30', source: '29', target: '30' },
    { id: 'e21-31', source: '21', target: '31' },
    { id: 'e31-32', source: '31', target: '32' },
    { id: 'e2-33', source: '2', target: '33' },
    { id: 'e2-34', source: '2', target: '34' },
    { id: 'e2-35', source: '2', target: '35' },
    { id: 'e2-36', source: '2', target: '36' },
    { id: 'e33-37', source: '33', target: '37' },
    { id: 'e37-38', source: '37', target: '38' },
    { id: 'e38-39', source: '38', target: '39' },
    { id: 'e39-40', source: '39', target: '40' },
    { id: 'e40-41', source: '40', target: '41' },
    { id: 'e41-42', source: '41', target: '42' },
    { id: 'e34-43', source: '34', target: '43' },
    { id: 'e43-44', source: '43', target: '44' },
    { id: 'e44-45', source: '44', target: '45' },
    { id: 'e35-46', source: '35', target: '46' },
    { id: 'e46-47', source: '46', target: '47' },
    { id: 'e36-48', source: '36', target: '48' },
    { id: 'e48-49', source: '48', target: '49' },
    { id: 'e49-50', source: '49', target: '50' },
    { id: 'e25-51', source: '25', target: '51' },
    { id: 'e41-52', source: '41', target: '52' },
]
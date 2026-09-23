import { createServer } from 'node:http';

import { EVENTS } from './events.data.mjs';

const PORT = 3000;
const DELAY_MS = 450;

const jsonHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
  'Access-Control-Allow-Origin': '*',
};

function send(res, status, body) {
  const payload = JSON.stringify(body);
  res.writeHead(status, {
    ...jsonHeaders,
    'Content-Length': Buffer.byteLength(payload),
  });
  res.end(payload);
}

const server = createServer((req, res) => {
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    });
    res.end();
    return;
  }

  if (req.method !== 'GET' || !req.url) {
    send(res, 405, { error: 'Method not allowed' });
    return;
  }

  const url = new URL(req.url, `http://127.0.0.1:${PORT}`);

  if (url.pathname === '/api/health') {
    send(res, 200, { status: 'ok' });
    return;
  }

  if (url.pathname === '/api/events') {
    const query = (url.searchParams.get('q') ?? '').trim().toLowerCase();
    const city = url.searchParams.get('city') ?? 'all';
    const category = url.searchParams.get('category') ?? 'all';
    const modality = url.searchParams.get('modality') ?? 'all';

    const events = EVENTS.filter((event) => {
      const matchesSearch = query === '' || event.name.toLowerCase().includes(query);
      const matchesCity = city === 'all' || event.city === city;
      const matchesCategory = category === 'all' || event.category === category;
      const matchesModality = modality === 'all' || event.modality === modality;

      return matchesSearch && matchesCity && matchesCategory && matchesModality;
    });

    setTimeout(() => {
      send(res, 200, events);
    }, DELAY_MS);
    return;
  }

  send(res, 404, { error: 'Not found' });
});

server.listen(PORT, () => {
  console.log(`API listening on http://127.0.0.1:${PORT}`);
});

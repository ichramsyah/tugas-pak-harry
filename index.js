const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let notes = [
  { id: 1, judul: 'Tugas Kuliah', body: '- Tugas Permograman Asinkron \n- Tugas Bahasa Inggris \n- Tugas Permograman Web dan Mobile' },
  { id: 2, judul: 'Jadwal Meeting', body: '- Meeting Kantor (13 April 2025 - 14:00) \n- Meeting Tugas Kewirausahaan (14 April 2025 - 20:00)' },
  { id: 3, judul: 'Jadwal Belajar', body: '- Senin: React  \n- Selasa: Laravel \n- Kamis: Masak' },
];

// log semua request ke seluruh aplikasi
app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.url}`);
  next();
});

// Middleware untuk Validasi
function validateNoteFields(req, res, next) {
  const { judul, body } = req.body;
  if (!judul || !body) {
    return res.status(400).json({ error: 'Judul dan Body harus diisi' });
  }
  next(); // lanjut ke handler utama
}

// GET - menampilkan data catatan
app.get('/notes', (req, res) => {
  res.json(notes);
});

// POST - Membuat catatan baru
app.post('/add-notes', validateNoteFields, (req, res) => {
  const { judul, body } = req.body;
  const id = notes.length ? notes[notes.length - 1].id + 1 : 1;
  const newNote = { id, judul, body };
  notes.push(newNote);
  res.status(201).json(newNote);
});

// PUT - Memperbarui catatan berdasarkan ID
app.put('/update-notes/:id', validateNoteFields, (req, res) => {
  const noteId = parseInt(req.params.id);
  const noteIndex = notes.findIndex((note) => note.id === noteId);

  if (noteIndex !== -1) {
    notes[noteIndex].judul = req.body.judul;
    notes[noteIndex].body = req.body.body;
    res.json({ message: 'Catatan berhasil diperbarui', note: notes[noteIndex] });
  } else {
    res.status(404).json({ error: 'Catatan tidak ditemukan' });
  }
});

// DELETE - Menghapus catatan berdasarkan ID
app.delete('/delete-notes/:id', (req, res) => {
  const noteId = parseInt(req.params.id);

  // Cari index catatan
  const noteIndex = notes.findIndex((note) => note.id === noteId);

  if (noteIndex !== -1) {
    // Hapus catatan dari array
    const deletedNote = notes.splice(noteIndex, 1);
    res.json({ message: 'Catatan berhasil dihapus', note: deletedNote[0] });
  } else {
    res.status(404).json({ error: 'Catatan tidak ditemukan' });
  }
});

app.listen(port, () => {
  console.log(`Server http://localhost:${port}`);
});

const QuisDB = {
	list: [
		{
			id: 1,
			title: "KuisKu 1",
			subtitle: "Kuis belajar masak",
			jml_soal: 10,
			waktu: 60,
		},
		{
			id: 2,
			title: "KuisKu 2",
			subtitle: "Kuis belajar makan",
			jml_soal: 10,
			waktu: 60,
		},
		{
			id: 3,
			title: "KuisKu 3",
			subtitle: "Kuis belajar ngoing",
			jml_soal: 10,
			waktu: 60,
		},
		{
			id: 4,
			title: "KuisKu 4",
			subtitle: "Kuis belajar minum",
			jml_soal: 10,
			waktu: 60,
		},
	],
	soal: [
		{
			id: 1,
			id_quis: 1,
			soal: "apa yang terjadi pada dirimu ?",
		},
		{
			id: 2,
			id_quis: 1,
			soal: "mau makan apa ?",
		},
		{
			id: 3,
			id_quis: 1,
			soal: "roti harganya berapa ?",
		},
	],
	pilgan: [
		{
			id: 1,
			id_soal: 1,
			id_quis: 1,
			kode_jawaban: "A",
			jawaban: "Pusing",
		},
		{
			id: 2,
			id_soal: 1,
			id_quis: 1,
			kode_jawaban: "B",
			jawaban: "Perutku sakit nih",
		},
		{
			id: 3,
			id_soal: 1,
			id_quis: 1,
			kode_jawaban: "C",
			jawaban: "Pengen makan",
		},
		{
			id: 4,
			id_soal: 2,
			id_quis: 1,
			kode_jawaban: "A",
			jawaban: "Rajangan",
		},
		{
			id: 5,
			id_soal: 2,
			id_quis: 1,
			kode_jawaban: "B",
			jawaban: "Tempe",
		},
		{
			id: 6,
			id_soal: 2,
			id_quis: 1,
			kode_jawaban: "C",
			jawaban: "Roti",
		},
		{
			id: 7,
			id_soal: 3,
			id_quis: 1,
			kode_jawaban: "A",
			jawaban: "Rp 10.000",
		},
		{
			id: 8,
			id_soal: 3,
			id_quis: 1,
			kode_jawaban: "B",
			jawaban: "Rp 5.000",
		},
		{
			id: 9,
			id_soal: 3,
			id_quis: 1,
			kode_jawaban: "C",
			jawaban: "Rp 13.000",
		},
	],
};

export default QuisDB;

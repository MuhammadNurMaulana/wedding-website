import { Scheherazade_New } from "next/font/google"

const arabic = Scheherazade_New({ weight: "700", subsets: ["arabic"] })

export default function Doa() {
  return (
    <div className="text-center w-10/12 mx-auto my-10">
      <h1 className={`${arabic.className} font-bold text-2xl`}>
        يَـٰٓأَيُّهَا ٱلنَّاسُ ٱتَّقُوا۟ رَبَّكُمُ ٱلَّذِى خَلَقَكُم مِّن نَّفْسٍۢ وَٰحِدَةٍۢ وَخَلَقَ مِنْهَا زَوْجَهَا وَبَثَّ مِنْهُمَا رِجَالًۭا كَثِيرًۭا وَنِسَآءًۭ ۚ وَٱتَّقُوا۟ ٱللَّهَ ٱلَّذِى تَسَآءَلُونَ بِهِۦ وَٱلْأَرْحَامَ ۚ
        إِنَّ ٱللَّهَ كَانَ عَلَيْكُمْ رَقِيبًۭا
      </h1>
      <p className="my-4">
        &ldquo;Wahai manusia, bertakwalah kepada Tuhanmu yang telah menciptakan kamu dari diri yang satu (Adam), dan (Allah) menciptakan pasangannya (Hawa) dari dirinya; dan dari keduanya Allah memperkembangbiakkan laki-laki dan perempuan
        yang banyak. Dan bertakwalah kepada Allah yang dengan (menggunakan) nama-Nya kamu saling meminta satu sama lain, dan (peliharalah) hubungan kekeluargaan. Sesungguhnya Allah selalu menjaga dan mengawasimu.&rdquo;
      </p>
      <h1 className="font-semibold my-12 text-lg">QS An-Nur (24:32)</h1>
    </div>
  )
}

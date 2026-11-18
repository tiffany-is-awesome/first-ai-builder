# ReadTrail 2: the Reading Path (curriculum map)

This document describes how the reading curriculum of **ReadTrail 2** (`v2/index.html`) is organised. It is generated from the skill table in the code (`SKILLS`), so it matches what the app does. The original ReadTrail (root `index.html`) is unchanged.

## 1. What was wrong with the old 100 levels

| Problem found in the code | What the new path does |
|---|---|
| `genQ()` mixed every sub-skill of a unit (e.g. 5 different phonological-awareness skills in "Hearing sounds"), so a child met many skills before learning one | A lesson draws questions only from **its own skill**. Older skills return only as a small, labelled review |
| Skills were not taught step by step | Every lesson is: **show and explain → do it together (with hints, 2 choices) → do it alone (3 choices, no hints) → short check** |
| One number, `S.level`, described the child. Passing a lesson moved the child to the next level | Every one of the 99 skills has its own record and a five-step state. Levels are only a map position |
| Placement asked 14 questions across 7 stages and could put a child at level 81 | Placement checks ten areas separately, with 4 to 8 different items each, and it stops going deeper when a foundation is missing |
| Vocabulary only started in Unit 9 | Vocabulary skills run from Stage 1 (pictures and spoken words) to Stage 9 (synonyms, context clues, multiple meanings) |
| Speed was rewarded (+14 mastery for an answer under 7 seconds, bonus points for speed, words-per-minute shown as the fluency score) | Speed is never rewarded. Reward depends on getting it right without help. Fluency is judged on accuracy, smoothness and understanding |
| Failing one test question sent the child back through the whole lesson | A struggle sends the child to the one missing **prerequisite** for a short mini-lesson, then returns to the skill |

## 2. Skill states (kept per skill, never from one answer)

| State | Meaning | How a skill gets there |
|---|---|---|
| 0 Not introduced | Never taught | no record |
| 1 Learning | Has been shown it | taught, fewer than 3 answers |
| 2 Practising | Sometimes right, still needs help | answers with hints or mixed results |
| 3 Developing independence | Usually right alone | the last two answers right on their own |
| 4 Mastered | Consistent across sessions | 4 of the last 5 alone, **on at least 2 different days or 2 different activities**, and it survives a spaced review |

A skill that is missed in a later review drops back to Practising (the history is a rolling window). Letters, sounds and patterns are also tracked item by item (for example the sound of "m"), so the app knows exactly which sounds are weak.

## 3. How the app chooses what comes next

1. **Remediation first.** If the child missed 3 of the last 5 in a skill, find the weakest prerequisite below state 3 and practise it for a few questions (smaller choices, familiar pictures, a demonstration), then go back.
2. **Spaced review.** Skills at state 3 or 4 come back after 1, 2, 4, 7 and 14 days, inside other lessons (about 1 question in 4) and in the Daily Adventure. If a review fails, the skill goes back to Practising.
3. **The next new skill.** The first skill, in path order, that is not yet at state 3 and whose prerequisites are all at state 3. Letters and sounds are introduced a few at a time (a new letter is added only when the earlier ones are known), so words can be built early (s a t p i n …).
4. **A language track runs alongside.** Every third lesson the child gets a listening or vocabulary skill that they can do (they can understand stories before they can read them).

Lessons are short: about 8 to 12 questions, ended gently (never "you failed"). Pictures support but cannot be used to guess: choices that look alike differ by one sound or letter, so the child has to sound the word out.

## 4. Placement ("play with Biscuit")

The starting games are 18 short groups of games ("areas"), always in the same order: listening, print and books, listening to a story, rhyme and syllables, first/last/middle sounds, letter names, letter sounds, blending, taking words apart, reading short words, short vowels and word families, tricky words, simple sentences, three groups of more complex phonics, longer words, and reading short stories. Each group uses 4 to 12 different questions, never the same question twice.

- **A foundation has to be shown before the next group opens.** A group that depends on another (for example reading short words depends on letter sounds and blending) is only asked once the earlier one went well (80% or more). Nobody skips a foundation.
- **No credit for luck.** A group needs at least 6 answers before it counts. A group that goes badly stops after 4 answers so the child is not frustrated. A group that is almost there (50 to 80%) gets a second look of 4 more questions before it is judged.
- **Credit is deliberately modest.** 80% or more: the skill starts as "Developing independence" (never "Mastered"). 67 to 80%: "Practising". Letter names and letter sounds are only credited when the whole group went well, and knowing letter names never credits letter sounds. Reading a word the child has memorised does not credit decoding (decoding uses words built from letters the child has shown).
- **Later success is evidence about earlier skills.** If a child clearly does well in two later groups, one slightly shaky early group is given the benefit of the doubt (but still as "Developing independence" or "Practising", and the skill is reviewed again soon).
- **A profile is saved on the device** (what was checked, results, notes, where to start), and a parent can see it and replay the games at any time. A very small number of lucky guessers can still get credit for one group; the spaced review and the "struggled, go back to the foundation" rule are the safety net.

## 5. Skill table

### Stage 1: Listening, language and books
*Get ready to read: listen, talk about pictures, find out how a book works.*

| Skill | Strand | Needs first | Reads instructions? |
|---|---|---|---|
| Listen and find the sound `s1_env` | Listening/language | nothing | No, everything is spoken |
| Hear a word, find the picture `s1_wp` | Listening/language | nothing | No, everything is spoken |
| New words for things around us `v1_nw` | Meaning | Hear a word, find the picture | No, everything is spoken |
| How a book works `s1_book` | Print & sentences | nothing | No, everything is spoken |
| Where to start and which way to go `s1_dir` | Print & sentences | How a book works | No, everything is spoken |
| Spoken sentences are made of words `s1_words` | Sounds in words | nothing | No, everything is spoken |
| Words can be put together from parts `s1_parts` | Sounds in words | Hear a word, find the picture | No, everything is spoken |
| Listen to a short story `s1_story` | Comprehension | Hear a word, find the picture | No, everything is spoken |

### Stage 2: Sounds in spoken words
*Hear and play with the sounds inside words. No letters needed yet.*

| Skill | Strand | Needs first | Reads instructions? |
|---|---|---|---|
| Words that rhyme `s2_rhy` | Sounds in words | Hear a word, find the picture | No, everything is spoken |
| Which word does not rhyme? `s2_nrhy` | Sounds in words | Words that rhyme | No, everything is spoken |
| Clapping the beats in words `s2_syl` | Sounds in words | Words can be put together from parts | No, everything is spoken |
| What things can do and what they are for `v2_act` | Meaning | Hear a word, find the picture | No, everything is spoken |
| The first sound in a word `s2_fst` | Sounds in words | Words that rhyme | No, everything is spoken |
| The last sound in a word `s2_lst` | Sounds in words | The first sound in a word | No, everything is spoken |
| The middle sound in a word `s2_mid` | Sounds in words | The last sound in a word | No, everything is spoken |
| Putting two sounds together `s2_bl2` | Sounds in words | The first sound in a word | No, everything is spoken |
| Putting three sounds together `s2_bl3` | Sounds in words | Putting two sounds together | No, everything is spoken |
| Pulling a word into its sounds `s2_seg` | Sounds in words | Putting three sounds together; The middle sound in a word | No, everything is spoken |
| Longer sound patterns `s2_cx` | Sounds in words | Pulling a word into its sounds | No, everything is spoken |
| Change a sound, make a new word `s2_man` | Sounds in words | Pulling a word into its sounds; Putting three sounds together | No, everything is spoken |

### Stage 3: Letters and their sounds
*Learn letter shapes, names and the sound each one makes.*

| Skill | Strand | Needs first | Reads instructions? |
|---|---|---|---|
| Letter names `s3_nm` | Letters | nothing | No, everything is spoken |
| Big letters `s3_uc` | Letters | Letter names | No, everything is spoken |
| Small letters `s3_lc` | Letters | Letter names | No, everything is spoken |
| Big and small partners `s3_ml` | Letters | Big letters; Small letters | No, everything is spoken |
| What sound does each letter make? `s3_snd` | Letters | The first sound in a word | No, everything is spoken |
| Hear a sound, find the letter `s3_s2l` | Letters | What sound does each letter make? | No, everything is spoken |
| Which word begins with this letter sound? `s3_bgn` | Letters | What sound does each letter make? | No, everything is spoken |
| The name and the sound are different `s3_nvs` | Letters | What sound does each letter make?; Letter names | No, everything is spoken |
| Letters in different styles and places `s3_fnt` | Letters | Big and small partners | No, everything is spoken |

### Stage 4: Sounding words out
*Join letter sounds together to read short words.*

| Skill | Strand | Needs first | Reads instructions? |
|---|---|---|---|
| Sounds in a written word `s4_ls` | Decoding | What sound does each letter make?; Pulling a word into its sounds | No, everything is spoken |
| Blend two letter sounds `s4_b2` | Decoding | What sound does each letter make?; Putting two sounds together | No, everything is spoken |
| Blend three letter sounds `s4_b3` | Decoding | Blend two letter sounds; Putting three sounds together | No, everything is spoken |
| Read short words `s4_rd` | Decoding | Blend three letter sounds | Yes |
| Take a word apart and build it `s4_sg` | Decoding | Blend three letter sounds; Pulling a word into its sounds | Yes |
| Read a word, find its picture `s4_pic` | Decoding | Read short words | Yes |
| Read words you have never seen `s4_unf` | Decoding | Read a word, find its picture | Yes |

### Stage 5: Short vowels and word families
*Read and spell short words with a, i, o, u, e and word families.*

| Skill | Strand | Needs first | Reads instructions? |
|---|---|---|---|
| Short a words `s5_a` | Decoding | Read short words | Yes |
| Short i words `s5_i` | Decoding | Short a words | Yes |
| Short o words `s5_o` | Decoding | Short i words | Yes |
| Short u words `s5_u` | Decoding | Short o words | Yes |
| Short e words `s5_e` | Decoding | Short u words | Yes |
| Word families `s5_fam` | Decoding | Short a words; Short i words | Yes |
| Change one sound to make a new word `s5_chg` | Decoding | Word families | Yes |
| Spell short words with letter tiles `s5_spl` | Decoding | Short a words; Short i words; Take a word apart and build it | Yes |
| Read new words with patterns you know `s5_unf` | Decoding | Word families; Short e words | Yes |
| Describing words `v3_dsc` | Meaning | Hear a word, find the picture | No, everything is spoken |

### Stage 6: Tricky words and sentences
*Read common words and simple sentences that make sense.*

| Skill | Strand | Needs first | Reads instructions? |
|---|---|---|---|
| Tricky words: the, a, I, is, to, my `s6_hf1` | Print & sentences | Read short words | Yes |
| Tricky words: see, we, he, she, me, be `s6_hf2` | Print & sentences | Tricky words: the, a, I, is, to, my | Yes |
| Tricky words: was, said, you, are, one, come `s6_hf3` | Print & sentences | Tricky words: see, we, he, she, me, be | Yes |
| Tricky words: have, they, were, what, where, there `s6_hf4` | Print & sentences | Tricky words: was, said, you, are, one, come | Yes |
| Tricky words: from, want, with, could, would, some `s6_hf5` | Print & sentences | Tricky words: have, they, were, what, where, there | Yes |
| Two words together `s6_phr` | Print & sentences | Tricky words: the, a, I, is, to, my; Read short words | Yes |
| Read a simple sentence `s6_sen` | Print & sentences | Two words together; Tricky words: see, we, he, she, me, be | Yes |
| Capitals, spaces and end marks `s6_cap` | Print & sentences | Read a simple sentence | Yes |
| Read a sentence and answer a question `s6_qa` | Print & sentences | Read a simple sentence | Yes |
| Read several sentences `s6_con` | Print & sentences | Read a sentence and answer a question; Capitals, spaces and end marks | Yes |
| Words from stories `v4_sto` | Meaning | Read a simple sentence | Yes |
| Listen to a longer story `l5_story` | Comprehension | Listen to a short story | No, everything is spoken |

### Stage 7: More phonics
*Digraphs, blends, long vowels, silent e and vowel teams.*

| Skill | Strand | Needs first | Reads instructions? |
|---|---|---|---|
| sh and ch `s7_dg1` | Decoding | Short e words; Tricky words: the, a, I, is, to, my | Yes |
| th, wh and ck `s7_dg2` | Decoding | sh and ch | Yes |
| Blends with l: bl, cl, fl, gl, pl, sl `s7_bl1` | Decoding | sh and ch | Yes |
| Blends with r and s `s7_bl2` | Decoding | Blends with l: bl, cl, fl, gl, pl, sl | Yes |
| Blends at the end: mp, nd, nt, st, lk, ft, sk `s7_fin` | Decoding | Blends with l: bl, cl, fl, gl, pl, sl | Yes |
| Long and short vowels `s7_lv` | Decoding | Short e words | Yes |
| Silent e `s7_me` | Decoding | Long and short vowels | Yes |
| ai and ay `s7_vt1` | Decoding | Silent e | Yes |
| ee and ea `s7_vt2` | Decoding | ai and ay | Yes |
| oa, ow and igh `s7_vt3` | Decoding | ee and ea | Yes |
| ar, or, er, ir, ur `s7_rc` | Decoding | ai and ay | Yes |
| oo, ou, ow, oi, oy `s7_ov` | Decoding | oa, ow and igh | Yes |
| Tricky spelling patterns `s7_cx` | Decoding | oa, ow and igh; ar, or, er, ir, ur | Yes |

### Stage 8: Longer words
*Syllables, compound words, prefixes and suffixes.*

| Skill | Strand | Needs first | Reads instructions? |
|---|---|---|---|
| Breaking a long word into parts `s8_syl` | Decoding | Silent e; Read a simple sentence | Yes |
| Compound words `s8_cmp` | Decoding | Breaking a long word into parts | Yes |
| Prefixes: un- and re- `s8_pre` | Decoding | Breaking a long word into parts | Yes |
| Suffixes: -s, -ed, -ing, -ful, -less `s8_suf` | Decoding | Breaking a long word into parts | Yes |
| Spelling changes when we add an ending `s8_chg` | Decoding | Suffixes: -s, -ed, -ing, -ful, -less | Yes |
| Word families: help, helper, helpful `s8_fam` | Decoding | Suffixes: -s, -ed, -ing, -ful, -less | Yes |
| Read longer words `s8_lw` | Decoding | Compound words; Prefixes: un- and re-; Suffixes: -s, -ed, -ing, -ful, -less | Yes |

### Stage 9: Words, grammar and meaning
*Vocabulary, word relationships and how language works.*

| Skill | Strand | Needs first | Reads instructions? |
|---|---|---|---|
| What words mean `s9_mean` | Meaning | Read a simple sentence; Words from stories | Yes |
| Words that mean the same `s9_syn` | Meaning | What words mean | Yes |
| Words that mean the opposite `s9_ant` | Meaning | What words mean | Yes |
| Sorting words into groups `s9_cat` | Meaning | Read a simple sentence | Yes |
| Naming, action and describing words `s9_pos` | Meaning | Read a simple sentence; Describing words | Yes |
| One and many `s9_pl` | Meaning | Read a simple sentence | Yes |
| Verbs: now, before and who `s9_vb` | Meaning | Naming, action and describing words | Yes |
| Using clues to work out a word `s9_ctx` | Meaning | What words mean | Yes |
| Words with more than one meaning `s9_mm` | Meaning | What words mean | Yes |
| Using new words in sentences `s9_use` | Meaning | Using clues to work out a word; Words from stories | Yes |

### Stage 10: Stories and understanding
*Read stories smoothly and understand them.*

| Skill | Strand | Needs first | Reads instructions? |
|---|---|---|---|
| Read a short story yourself `s10_dec` | Comprehension | Read several sentences; Silent e | Yes |
| Who, what, where, when `s10_who` | Comprehension | Read several sentences | Yes |
| What happened first, next, last `s10_seq` | Comprehension | Who, what, where, when | Yes |
| Why did it happen? `s10_ce` | Comprehension | Who, what, where, when | Yes |
| Characters and how they feel `s10_chr` | Comprehension | Who, what, where, when | Yes |
| Using clues to work things out `s10_inf` | Comprehension | Why did it happen?; Characters and how they feel | Yes |
| Finding facts in a passage `s10_find` | Comprehension | Who, what, where, when | Yes |
| The main idea `s10_main` | Comprehension | Finding facts in a passage | Yes |
| Retell a story `s10_ret` | Comprehension | What happened first, next, last; Characters and how they feel | Yes |
| Read it aloud smoothly `s10_flu` | Comprehension | Read a short story yourself | Yes |
| Longer, harder texts `s10_long` | Comprehension | The main idea; Retell a story; Using clues to work things out | Yes |

## 6. Where the old lessons went

| Old unit and activity | New skill(s) |
|---|---|
| Unit 1 First sounds, Find the sound | s2_fst, s3_bgn |
| Unit 1 Count sounds, blend sounds | s2_seg, s2_bl3 |
| Unit 1 Syllables, changing sounds | s2_syl, s2_man |
| Unit 1 Rhyming | s2_rhy, s2_nrhy |
| Unit 2 Letter sounds (10 letter groups) | s3_snd, s3_s2l, s3_bgn, s3_nvs (letters added a few at a time) |
| Unit 3 Blend and find the picture, stretch and blend | s2_bl3, s4_b3 |
| Unit 3 Missing sound, first/last letter | s4_ls, s2_lst |
| Unit 4 Short a, i, o, u, e words, spelling tiles | s5_a to s5_e, s5_spl |
| Unit 5 Sight words | s6_hf1 to s6_hf5 |
| Unit 6 Reading sentences, capitals and end marks | s6_phr, s6_sen, s6_qa, s6_cap |
| Unit 7 Digraphs and blends | s7_dg1, s7_dg2, s7_bl1, s7_bl2, s7_fin |
| Unit 8 Long vowels and patterns | s7_lv, s7_me, s7_vt1 to s7_vt3, s7_rc, s7_ov; spelling and word parts: s8_syl |
| Unit 9 Meanings, compounds, affixes, synonyms, grammar | s8_cmp, s8_pre, s8_suf, s9_mean, s9_syn, s9_ant, s9_pos, s9_pl, s9_vb |
| Unit 10 Stories | s10_who, s10_seq, s10_ce, s10_chr, s10_inf, s10_find, s10_main, s10_dec, s10_long |
| Word of the Day | kept; its words are revisited by the vocabulary skills and the spaced review |
| Little Games, My Cards, journey map | kept; they share the letter, sound and word records with the path |

## 7. What was missing and has been added

Listening to environmental sounds; spoken word to picture; how books work and reading direction (left to right, top to bottom); counting words in a sentence; word parts; listening to stories; final sound; middle sound; segmenting; letter names vs letter sounds; letters in different fonts; decoding with look-alike answer choices; reading unseen words; word families; phrases; connected sentences; vocabulary with picture, spoken definition, example sentence, use and revisit; categories; parts of speech; context clues; multiple meanings; retelling.

## 8. Known limits

* Browser voices cannot say a pure consonant sound (they say "tuh" for t). The app spells the sound the way a voice can say it ("sss", "mmm", "fff" for sounds that can be stretched; short and clipped for the rest). Recorded letter sounds would be better.
* Animal and environment sounds are synthesised, not recordings.
* Reading aloud (Stage 10) uses the device's speech recognition when it exists and always accepts "read it to a grown-up".

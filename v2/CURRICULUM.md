# ReadTrail 2: the Reading Path (curriculum map)

This document describes how the reading curriculum of **ReadTrail 2** (`v2/index.html`) is organised. It is generated from the skill table in the code (`SKILLS`), so it matches what the app does. The original ReadTrail (root `index.html`) is unchanged.

## 1. What was wrong with the old 100 levels

| Problem found in the code | What the new path does |
|---|---|
| `genQ()` mixed every sub-skill of a unit (e.g. 5 different phonological-awareness skills in "Hearing sounds"), so a child met many skills before learning one | A lesson draws questions only from **its own skill**. Older skills return only as a small, labelled review |
| Skills were not taught step by step | Every lesson is: **show and explain → do it together (with hints, 2 choices) → do it alone (3 choices, no hints) → short check** |
| One number, `S.level`, described the child. Passing a lesson moved the child to the next level | Every one of the 99 skills has its own record and a five-step state. Levels are only a map position |
| Placement asked 14 questions across 7 stages and could put a child at level 81 | Placement checks 18 areas separately, 4 questions each (8 for the two letter areas), stops an area as soon as the result is clear, and does not go deeper when a foundation is missing |
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
2. **A suspected pattern is checked.** If mistakes form a pattern (see section 8), a 4-question check runs before anything is taught.
3. **Skills that are slipping are refreshed.** A skill that was reached and has fallen back gets a short refresh, not a full lesson.
4. **Spaced review.** Skills at state 3 or 4 come back after 1, 2, 4, 7 and 14 days: inside other lessons (about 1 question in 4 in the "alone" part), as a short review lesson about every fifth lesson, and in the Daily Adventure. The wait is halved when recent answers needed hints or were wrong, and lengthened by half for skills that are solid.
5. **A Mini Story every fourth lesson** when one is open (section 8).
6. **A language track every third lesson.** A listening or vocabulary skill the child can do (they can understand stories before they can read them).
7. **Letters keep growing in turns**, a few at a time, in one session per group (section 8).
8. **The next new skill.** The first skill, in path order, that is not yet at state 3 and whose prerequisites are all at state 3. Skills that lead straight to reading words (rhymes, first sounds, letter sounds, blending, reading short words) go first, so real words appear after about six letters (s a t p i n) instead of after the whole alphabet.

Lessons are short: about 8 to 12 questions, ended gently (never "you failed"). Pictures support but cannot be used to guess: choices that look alike differ by one sound or letter, so the child has to sound the word out.

## 4. Placement ("play with Biscuit")

The starting games are 18 short groups of games ("areas"), always in the same order: listening, print and books, listening to a story, rhyme and syllables, first/last/middle sounds, letter names, letter sounds, blending, taking words apart, reading short words, short vowels and word families, tricky words, simple sentences, three groups of more complex phonics, longer words, and reading short stories. Each group asks 4 questions (5 where it has five kinds of question; the two letter-by-letter groups ask 8), never the same question twice, and stops as soon as the result is clear. A slim progress bar with a paw print shows how far along the child is. There is nothing to tap between groups: after a short "Great job!" the next group starts by itself.

- **A foundation has to be shown before the next group opens.** A group that depends on another (for example reading short words depends on letter sounds and blending) is only asked once the earlier one went well (80% or more). Nobody skips a foundation.
- **Short, but no credit for luck.** A group needs at least 4 answers before it counts. 4 of 4 right (or 4 of 5) ends the group with a pass. 1 or none of 4 right stops it, so the child is not frustrated. A child in between gets 1 or 2 more questions, never more than 6 (letter groups: 8, at most 10, because the path needs at least 6 letters known before it moves on). Kinds of question that were not asked are credited as "Practising", not "Developing independence". Word meaning and story understanding (the last two groups) also start as "Practising": a short check is not enough evidence for them, and the lesson's own quick check confirms them.
- **Credit is deliberately modest.** 80% or more: the skill starts as "Developing independence" (never "Mastered"). 67 to 80%: "Practising". Letter names and letter sounds are only credited when the whole group went well, and knowing letter names never credits letter sounds. Reading a word the child has memorised does not credit decoding (decoding uses words built from letters the child has shown).
- **Later success is evidence about earlier skills.** If a child clearly does well in two later groups, one slightly shaky early group is given the benefit of the doubt (but still as "Developing independence" or "Practising", and the skill is reviewed again soon).
- **A profile is saved on the device** (what was checked, results, notes, where to start), and a parent can see it and replay the games at any time. A small number of lucky guessers can still get credit for one group (in 12 simulated runs of a child answering completely at random, the short version credited 19 skills by luck out of about 1,190, against 4 for the longer version); the quick check at the start of each lesson, the spaced review and the "struggled, go back to the foundation" rule are the safety net.

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
| Sounds in a written word `s4_ls` | Decoding | What sound does each letter make?; Putting two sounds together | No, everything is spoken |
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

## 8. Learning faster, honestly (the accelerated-learning phase)

**Flow:** assess, find what is missing, teach only that, practise, check that the child can do it alone, move on, review before it is forgotten.

* **Check first.** Before a new skill starts there is a short check on single-try questions (no hints). A skill is skipped only when the child gets 4 of 4 (or 5 of 6 after a doubt) right; 2 of 3 gets 3 more questions; 1 of 3 or fewer means "teach it". For letters, only the letters or sounds that were missed are taught. One answer never counts as mastery, and a skipped skill is still reviewed later, because choosing among answers is not the same as reading alone. Questions in a check use items the child has not met in a lesson.
* **Letters are taught in groups.** One session covers a few letters: the name, big and small, the sound and a picture, then use in words, while each of those is still tracked separately. A child who already reads gets one wide check (8 letters) instead of one session per group.
* **Real reading starts early.** After about six letters the child blends and reads real words. Word practice only uses letters the child has learned; the wrong-answer words are filtered the same way (audited at 6, 10, 14 and 20 letters, 0 out-of-letter words in stage 4 and 5 practice).
* **Pace follows the child.** Fast and right alone: the lesson ends early (3 fast independent answers; 4 for letter groups). Right but slow: a few more varied examples, once. One miss: a hint, a demonstration, a retry. Repeated misses: remediation. Help is recorded separately ("practising") from right-first-time answers, and a mastered skill that weakens is scheduled for review.
* **Discovery.** For rhymes, word families, changing one sound, "sh" and the silent e, the child first looks at a few words (cat, hat, bat), notices what stays the same, and is then told the rule.
* **Patterns in mistakes.** Nine patterns are looked for (two letters mixed up, blending, breaking words into sounds, vowels, letter pairs like sh, guessing from pictures, choosing but not building, familiar but not new words, long words). A pattern is never named from one wrong answer: it needs at least 3 related mistakes on 2 days (or 4 mistakes), then a 4-question check, then short targeted help. If the child passes the check, nothing is changed.
* **Mini Stories.** 13 short stories in five tiers (first words, more letters, letter pairs, silent e, vowel pairs and endings). Each word is either built from taught sounds or is a listed tricky word, shown to the child first (at most 3 new words). A built-in checker confirms this for every story. Each story has pictures that support the story, 2 to 4 questions, and a "find the word" question. A page counts as read alone only if no word or page was played aloud. Children who already decode patterns start at a longer tier.
* **More than multiple choice.** Letter tiles (build and spell), tracing, finding a word in text, and reading aloud where the device has speech recognition. Where it does not, the "read it smoothly" skill uses a passage with questions and does not accept self-reporting.
* **Parent page.** Skills "on their own", "with some hints", "still learning", "needs extra practice", "due for review" and "slipping"; the patterns being worked on; accuracy in plain language (sounding out, new words, blending, breaking up words, letter tiles, tricky words, sentences, smoothness, word meanings, stories, remembering after a week); how many answers and days each skill took; how many skills a quick check skipped. No reading age and no grade level. Badges and streaks stay, but they are not data.
* **Measuring speed of learning.** For each skill the app records the answers, days and time it took to reach "independent"; right-first-time accuracy by area; accuracy on words never seen before; retention after 7 or more days; and Mini Story reading. These show how learning is going. They do not prove years saved, and nothing here claims that.

## 9. How this was tested

**Length of the starting games.** The first version asked 58 to 181 questions (a beginner 58, a child who reads well 181) and needed two taps between each group. The current version asks about 41 (beginner), 52 (knows letters and sounds), 64 (reads simple words), 81 (reads sentences) and 82 (reads well) in the simulation, with no taps between groups. Ten simulated runs per child credited almost the same skills as before (for example 97% against 98% of the skills the simulated child really knew for the child who reads sentences), but with less evidence behind each credit, which is why the lesson quick check and the spaced review matter. These are models of children, not real children; real timing has not been measured.

Five simulated children were run through the placement games and 24 lessons each on the final build. The simulated child answers by a model (it can slip and guess), so the exact numbers change a little from run to run. These are models of children, not real children.

| Simulated child | Where it started | What the 24 lessons looked like |
|---|---|---|
| 1. Knows no letters (age 6) | The very beginning: hearing words, rhymes, first sounds | No skills skipped by luck. Blending of spoken sounds, then 7 letter-group sessions, a first short word reading, a first Mini Story read with help (so it comes back). 0 lessons spent on something the child already knew |
| 2. Knows letters and sounds, cannot blend (age 6) | Blending | Blending taught and rebuilt after a check, then short words. 4 letter-group sessions for the letters not yet shown, 4 refreshes, 3 reviews, 1 story. 1 of 9 new lessons went over something already known (6 extra questions) |
| 3. Reads simple words, weak on complex phonics (age 7) | Letter pairs (stage 7) | No letter, blending or simple-word lessons. Letter pairs, blends, silent e and vowel pairs taught; 3 reviews; 6 Mini Stories at the child's level. 0 lessons on something already known |
| 4. Reads sentences, weak fluency and comprehension (age 8) | Longer words (stage 8) | No letter lessons. 3 skills skipped by quick check, the rest taught; comprehension skills practised; 2 pattern checks and 1 targeted lesson; 4 stories |
| 5. Already reads well (age 8) | Comprehension (stage 10) | No beginner lessons. 1 skill skipped by quick check, 5 longer Mini Stories, then (after stage 10) three letter checks of 8, 8 and 5 questions, each skipped, and reviews |

The same rules held in every run: no skill practised before its prerequisites; no skill reached "Mastered" in one sitting; 0 words out of letters in stage 4 and 5 practice; 0 undecodable words or answers in the 13 Mini Stories; 0 violations found by the audit; no JavaScript errors on any screen; no sideways scrolling at phone and computer sizes; a skill forced into "forgotten" got a refresh and recovered; a repeated mix-up was only picked up after repetition, checked, and cleared when the child passed. The lessons need nothing from the internet (the one network call in the app is the optional word-meaning lookup, which was there before).

## 10. Known limits

* The simulated children test the logic. They do not show how real children respond. Real use will tell whether the thresholds are right, and changes after this should be based on that evidence.
* A quick check can skip a skill by luck (about 1 in 100 on three-choice questions). That is why every skipped skill still comes back for review.
* A Mini Story cannot hear the child. Independence is judged from whether the child played a page aloud, the questions, and the "find the word" question.
* Stage 6 sentences and passages come from fixed banks that are picture-supported and not limited to letters the child has learned. Only stage 4 and 5 word practice and the Mini Stories are guaranteed to use learned sounds only.
* For a child who already decodes, letters are checked in one wide check and then by reading, not one by one. The page says this, so unchecked letters are not shown as mastered.
* There are no baseline comparisons, so the app does not say how many years or grades a child has gained.
* Browser voices cannot say a pure consonant sound (they say "tuh" for t). The app spells the sound the way a voice can say it ("sss", "mmm", "fff" for sounds that can be stretched; short and clipped for the rest). Recorded letter sounds would be better.
* Animal and environment sounds are synthesised, not recordings.
* Reading aloud (Stage 10) uses the device's speech recognition when it exists and always accepts "read it to a grown-up".
* **Say the sound.** After a letter sound is taught, the child is asked "Now you say it!" and can tap the microphone. This is practice, not a test: speech recognition is poor at single sounds like "sss", so any try is cheered (with an extra "I heard sss!" when it matches), nothing is marked wrong, and nothing is saved or counted towards a skill. Without a microphone, or if the child or browser says no, the child is simply asked to say it out loud. Tested with mocked microphones only, not with real speech or real children.

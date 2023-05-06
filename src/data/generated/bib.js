﻿const generatedBibEntries = {
    "Abubakar2020Multiple": {
        "abstract": "Context Multiple fault localization (MFL) is the act of identifying the locations of multiple faults (more than one fault) in a faulty software program. This is known to be more complicated, tedious, and costly in comparison to the traditional practice of presuming that a software contains a single fault. Due to the increasing interest in MFL by the research community, a broad spectrum of MFL debugging approaches and solutions have been proposed and developed. Objective The aim of this study is to systematically review existing research on MFL in the software fault localization (SFL) domain. This study also aims to identify, categorize, and synthesize relevant studies in the research domain. Method Consequently, using an evidence-based systematic methodology, we identified 55 studies relevant to four research questions. The methodology provides a systematic selection and evaluation process with rigorous and repeatable evidence-based studies selection process. Result The result of the systematic review shows that research on MFL is gaining momentum with stable growth in the last 5 years. Three prominent MFL debugging approaches were identified, i.e. One-bug-at-a-time debugging approach (OBA), parallel debugging approach, and multiple-bug-at-a-time debugging approach (MBA), with OBA debugging approach being utilized the most. Conclusion The study concludes with some identified research challenges and suggestions for future research. Although MFL is becoming of grave concern, existing solutions in the field are less mature. Studies utilizing real faults in their experiments are scarce. Concrete solutions to reduce MFL debugging time and cost by adopting an approach such as MBA debugging approach are also less, which require more attention from the research community.",
        "author": "Abubakar Zakari and Sai Peck Lee and Rui Abreu and Babiker Hussien Ahmed and Rasheed Abubakar Rasheed",
        "doi": "https://doi.org/10.1016/j.infsof.2020.106312",
        "issn": "0950-5849",
        "journal": "Information and Software Technology",
        "keywords": "Program debugging, Parallel debugging, Fault localization, Multiple faults, One-bug-at-a-time (OBA)",
        "pages": "106312",
        "title": "Multiple fault localization of software programs: A systematic literature review",
        "type": "article",
        "url": "https://www.sciencedirect.com/science/article/pii/S0950584920300641",
        "volume": "124",
        "year": "2020"
    },
    "Briand2007Using": {
        "abstract": "Using a specific machine learning technique, this paper proposes a way to identify suspicious statements during debugging. The technique is based on principles similar to Tarantula but addresses its main flaw: its difficulty to deal with the presence of multiple faults as it assumes that failing test cases execute the same fault(s). The improvement we present in this paper results from the use of C4.5 decision trees to identify various failure conditions based on information regarding the test cases' inputs and outputs. Failing test cases executing under similar conditions are then assumed to fail due to the same fault(s). Statements are then considered suspicious if they are covered by a large proportion of failing test cases that execute under similar conditions. We report on a case study that demonstrates improvement over the original Tarantula technique in terms of statement ranking. Another contribution of this paper is to show that failure conditions as modeled by a C4.5 decision tree accurately predict failures and can therefore be used as well to help debugging.",
        "author": "Briand, Lionel C. and Labiche, Yvan and Liu, Xuetao",
        "booktitle": "The 18th IEEE International Symposium on Software Reliability (ISSRE '07)",
        "doi": "10.1109/ISSRE.2007.31",
        "issn": "2332-6549",
        "keywords": "",
        "month": "Nov",
        "number": "",
        "pages": "137-146",
        "title": "Using Machine Learning to Support Debugging with Tarantula",
        "type": "INPROCEEDINGS",
        "volume": "",
        "year": "2007"
    },
    "Harman2012Search-Based": {
        "abstract": "In the past five years there has been a dramatic increase in work on Search-Based Software Engineering (SBSE), an approach to Software Engineering (SE) in which Search-Based Optimization (SBO) algorithms are used to address problems in SE. SBSE has been applied to problems throughout the SE lifecycle, from requirements and project planning to maintenance and reengineering. The approach is attractive because it offers a suite of adaptive automated and semiautomated solutions in situations typified by large complex problem spaces with multiple competing and conflicting objectives.This article1 provides a review and classification of literature on SBSE. The work identifies research trends and relationships between the techniques applied and the applications to which they have been applied and highlights gaps in the literature and avenues for further research.",
        "address": "New York, NY, USA",
        "articleno": "11",
        "author": "Harman, Mark and Mansouri, S. Afshin and Zhang, Yuanyuan",
        "doi": "10.1145/2379776.2379787",
        "issn": "0360-0300",
        "issue_date": "November 2012",
        "journal": "ACM Comput. Surv.",
        "keywords": "Software engineering, survey, search-based techniques",
        "month": "dec",
        "number": "1",
        "numpages": "61",
        "publisher": "Association for Computing Machinery",
        "title": "Search-Based Software Engineering: Trends, Techniques and Applications",
        "type": "article",
        "url": "https://doi.org/10.1145/2379776.2379787",
        "volume": "45",
        "year": "2012"
    },
    "Johnson2020Software": {
        "abstract": "Software development is a complex activity requiring intelligent action. This paper explores the use of an AI technique for one step in software development, viz. detecting the location of a fault in a program. A measure of program progress is proposed, which uses a Na\u00efve Bayes model to measure how useful the information that has been produced by the program to the task that the program is tackling. Then, deviations in that measure are used to find the location of faults in the code. Experiments are carried out to test the effectiveness of this measure.",
        "author": "Johnson, Colin",
        "conference": "40th SGAI International Conference on Innovative Techniques and Applications of Artificial Intelligence (AI 2020)",
        "doi": "10.1007/978-3-030-63799-6\\_20",
        "isbn": "9783030637989",
        "pages": "259-272",
        "publicationstatus": "Published",
        "publisher": "Springer Publishing Company",
        "title": "Software Fault Localisation via Probabilistic Modelling",
        "type": "inproceedings",
        "url": "https://nottingham-repository.worktribe.com/output/5345013",
        "year": "2020"
    },
    "Jones2005Empirical": {
        "abstract": "The high cost of locating faults in programs has motivated the development of techniques that assist in fault localization by automating part of the process of searching for faults. Empirical studies that compare these techniques have reported the relative effectiveness of four existing techniques on a set of subjects. These studies compare the rankings that the techniques compute for statements in the subject programs and the effectiveness of these rankings in locating the faults. However, it is unknown how these four techniques compare with Tarantula, another existing fault-localization technique, although this technique also provides a way to rank statements in terms of their suspiciousness. Thus, we performed a study to compare the Tarantula technique with the four techniques previously compared. This paper presents our study---it overviews the Tarantula technique along with the four other techniques studied, describes our experiment, and reports and discusses the results. Our studies show that, on the same set of subjects, the Tarantula technique consistently outperforms the other four techniques in terms of effectiveness in fault localization, and is comparable in efficiency to the least expensive of the other four techniques.",
        "address": "New York, NY, USA",
        "author": "Jones, James A. and Harrold, Mary Jean",
        "booktitle": "Proceedings of the 20th IEEE/ACM International Conference on Automated Software Engineering",
        "doi": "10.1145/1101908.1101949",
        "isbn": "1581139934",
        "keywords": "fault localization, empirical study, automated debugging, program analysis",
        "location": "Long Beach, CA, USA",
        "numpages": "10",
        "pages": "273\u2013282",
        "publisher": "Association for Computing Machinery",
        "series": "ASE '05",
        "title": "Empirical Evaluation of the Tarantula Automatic Fault-Localization Technique",
        "type": "inproceedings",
        "url": "https://doi.org/10.1145/1101908.1101949",
        "year": "2005"
    },
    "Keller2017A Critical": {
        "abstract": "In the past, spectrum-based fault localization (SBFL) techniques have been developed to pinpoint a fault location in a program given a set of failing and successful test executions. Most of the algorithms use similarity coefficients and have only been evaluated on established but small benchmark programs from the Software-artifact Infrastructure Repository (SIR). In this paper, we evaluate the feasibility of applying 33 state-of-the-art SBFL techniques to a large real-world project, namely ASPECTJ. From an initial set of 350 faulty version from the iBugs repository of ASPECTJ we manually classified 88 bugs where SBFL techniques are suitable. Notably, only 11 bugs of these bugs can be found after examining the 1000 most suspicious lines and on average 250 source code files need to be inspected per bug. Based on these results, the study showcases the limitations of current SBFL techniques on a larger program.",
        "author": "Keller, Fabian and Grunske, Lars and Heiden, Simon and Filieri, Antonio and van Hoorn, Andre and Lo, David",
        "booktitle": "2017 IEEE International Conference on Software Quality, Reliability and Security (QRS)",
        "doi": "10.1109/QRS.2017.22",
        "issn": "",
        "keywords": "",
        "month": "July",
        "number": "",
        "pages": "114-125",
        "title": "A Critical Evaluation of Spectrum-Based Fault Localization Techniques on a Large-Scale Software System",
        "type": "INPROCEEDINGS",
        "volume": "",
        "year": "2017"
    },
    "Le Goues2012A systematic": {
        "abstract": "There are more bugs in real-world programs than human programmers can realistically address. This paper evaluates two research questions: \u201cWhat fraction of bugs can be repaired automatically?\u201d and \u201cHow much does it cost to repair a bug automatically?\u201d In previous work, we presented GenProg, which uses genetic programming to repair defects in off-the-shelf C programs. To answer these questions, we: (1) propose novel algorithmic improvements to GenProg that allow it to scale to large programs and find repairs 68% more often, (2) exploit GenProg's inherent parallelism using cloud computing resources to provide grounded, human-competitive cost measurements, and (3) generate a large, indicative benchmark set to use for systematic evaluations. We evaluate GenProg on 105 defects from 8 open-source programs totaling 5.1 million lines of code and involving 10,193 test cases. GenProg automatically repairs 55 of those 105 defects. To our knowledge, this evaluation is the largest available of its kind, and is often two orders of magnitude larger than previous work in terms of code or test suite size or defect count. Public cloud computing prices allow our 105 runs to be reproduced for $403; a successful repair completes in 96 minutes and costs $7.32, on average.",
        "author": "Le Goues, Claire and Dewey-Vogt, Michael and Forrest, Stephanie and Weimer, Westley",
        "booktitle": "2012 34th International Conference on Software Engineering (ICSE)",
        "doi": "10.1109/ICSE.2012.6227211",
        "issn": "1558-1225",
        "keywords": "",
        "month": "June",
        "number": "",
        "pages": "3-13",
        "title": "A systematic study of automated program repair: Fixing 55 out of 105 bugs for $8 each",
        "type": "INPROCEEDINGS",
        "volume": "",
        "year": "2012"
    },
    "Wong2012Effective": {
        "abstract": "We propose the application of a modified radial basis function neural network in the context of software fault localization, to assist programmers in locating bugs effectively. This neural network is trained to learn the relationship between the statement coverage information of a test case and its corresponding execution result, success or failure. The trained network is then given as input a set of virtual test cases, each covering a single statement. The output of the network, for each virtual test case, is considered to be the suspiciousness of the corresponding covered statement. A statement with a higher suspiciousness has a higher likelihood of containing a bug, and thus statements can be ranked in descending order of their suspiciousness. The ranking can then be examined one by one, starting from the top, until a bug is located. Case studies on 15 different programs were conducted, and the results clearly show that our proposed technique is more effective than several other popular, state of the art fault localization techniques. Further studies investigate the robustness of the proposed technique, and illustrate how it can easily be applied to programs with multiple bugs as well.",
        "author": "Wong, W. Eric and Debroy, Vidroha and Golden, Richard and Xu, Xiaofeng and Thuraisingham, Bhavani",
        "doi": "10.1109/TR.2011.2172031",
        "issn": "1558-1721",
        "journal": "IEEE Transactions on Reliability",
        "keywords": "",
        "month": "March",
        "number": "1",
        "pages": "149-169",
        "title": "Effective Software Fault Localization Using an RBF Neural Network",
        "type": "ARTICLE",
        "volume": "61",
        "year": "2012"
    },
    "Wong2016A Survey": {
        "abstract": "Software fault localization, the act of identifying the locations of faults in a program, is widely recognized to be one of the most tedious, time consuming, and expensive - yet equally critical - activities in program debugging. Due to the increasing scale and complexity of software today, manually locating faults when failures occur is rapidly becoming infeasible, and consequently, there is a strong demand for techniques that can guide software developers to the locations of faults in a program with minimal human intervention. This demand in turn has fueled the proposal and development of a broad spectrum of fault localization techniques, each of which aims to streamline the fault localization process and make it more effective by attacking the problem in a unique way. In this article, we catalog and provide a comprehensive overview of such techniques and discuss key issues and concerns that are pertinent to software fault localization as a whole.",
        "author": "Wong, W. Eric and Gao, Ruizhi and Li, Yihao and Abreu, Rui and Wotawa, Franz",
        "doi": "10.1109/TSE.2016.2521368",
        "issn": "1939-3520",
        "journal": "IEEE Transactions on Software Engineering",
        "keywords": "",
        "month": "Aug",
        "number": "8",
        "pages": "707-740",
        "title": "A Survey on Software Fault Localization",
        "type": "ARTICLE",
        "volume": "42",
        "year": "2016"
    },
    "desouza2017spectrumbased": {
        "archiveprefix": "arXiv",
        "author": "Higor A. de Souza and Marcos L. Chaim and Fabio Kon",
        "eprint": "1607.04347",
        "primaryclass": "cs.SE",
        "title": "Spectrum-based Software Fault Localization: A Survey of Techniques, Advances, and Challenges",
        "type": "misc",
        "year": "2017"
    }
};
Map of Bioinformatics Fields, Methods & Principles:

```mermaid
mindmap
  root((Bioinformatics))
    Core Methods
      Alignment
        Genomics
        Transcriptomics
        Metagenomics
        Phylogenetics & Evolution
        Structural Bioinformatics
      Assembly & Mapping
        Genomics
        Metagenomics
      Statistical & ML Methods
        Genomics
        Transcriptomics
        Proteomics
        Metagenomics
        GWAS & Population Genomics
        Systems Biology
      Structural & Functional Modeling
        Proteomics
        Structural Bioinformatics
      Networks & Systems
        Proteomics
        Systems Biology
      Comparative & Evolutionary
        Phylogenetics & Evolution
        GWAS & Population Genomics
    Application Fields
      Genomics
      Transcriptomics
      Proteomics
      Metagenomics
      Phylogenetics & Evolution
      GWAS & Population Genomics
      Systems Biology
      Structural Bioinformatics
```

```mermaid
mindmap
  root((Bioinformatics))
    Core Methods
      Alignment:::important
        Genomics
        Transcriptomics
        Metagenomics
        Phylogenetics & Evolution
        Structural Bioinformatics
      Assembly & Mapping
        Genomics
        Metagenomics
      Statistical & ML Methods:::important
        Genomics
        Transcriptomics
        Proteomics
        Metagenomics
        GWAS & Population Genomics
        Systems Biology
      Structural & Functional Modeling
        Proteomics
        Structural Bioinformatics
      Networks & Systems
        Proteomics
        Systems Biology
      Comparative & Evolutionary
        Phylogenetics & Evolution
        GWAS & Population Genomics
```

```mermaid
timeline
    title Эволюция ключевых методов в биоинформатике
    1970-е : Первые алгоритмы выравнивания (Needleman-Wunsch, Smith-Waterman)
    1990-е : BLAST и массовое использование выравнивания
    2000-е : Геномные сборки (Human Genome Project), микрочипы (Transcriptomics)
    2010-е : Метагеномика (краткочтения, Illumina), GWAS (статистика и ML)
    2020-е : AlphaFold и ML в структурной биоинформатике, single-cell omics
```

```mermaid
classDiagram
    class Alignment {
      +Pairwise
      +Multiple
      +Profile/HMM
    }
    class AssemblyAndMapping {
      +De novo
      +Reference-based
    }
    class StatisticalML {
      +GWAS
      +Clustering
      +Deep learning
    }
    class StructuralModeling {
      +AlphaFold
      +Docking
    }
    class NetworksSystems {
      +GRNs
      +Pathways
    }
    class ComparativeEvolutionary {
      +Phylogenetics
      +Population genetics
    }

    Genomics --> Alignment
    Genomics --> AssemblyAndMapping
    Genomics --> StatisticalML

    Transcriptomics --> Alignment
    Transcriptomics --> StatisticalML

    Proteomics --> StructuralModeling
    Proteomics --> NetworksSystems
    Proteomics --> StatisticalML

    Metagenomics --> AssemblyAndMapping
    Metagenomics --> Alignment
    Metagenomics --> StatisticalML

    `Phylogenetics & Evolution` --> Alignment
    `Phylogenetics & Evolution` --> ComparativeEvolutionary

    `GWAS & Population Genomics` --> StatisticalML
    `GWAS & Population Genomics` --> ComparativeEvolutionary

    `Systems Biology` --> NetworksSystems
    `Systems Biology` --> StatisticalML

    `Structural Bioinformatics` --> StructuralModeling
    `Structural Bioinformatics` --> Alignment
```

```mermaid
C4Context
title Bioinformatics Knowledge Map

Person(student, "Student", "Learns bioinformatics methods")
System(bioinfo, "Bioinformatics", "Field connecting methods and applications")

System_Ext(genomics, "Genomics", "DNA sequencing & analysis")
System_Ext(transcriptomics, "Transcriptomics", "RNA expression analysis")
System_Ext(proteomics, "Proteomics", "Protein expression & modifications")
System_Ext(metagenomics, "Metagenomics", "Microbiome & ecology")
System_Ext(systems, "Systems Biology", "Pathways, networks")

Container(alignment, "Alignment", "MSA, BLAST, HMMs")
Container(ml, "Statistical & ML Methods", "GWAS, clustering, deep learning")
Container(assembly, "Assembly & Mapping", "Genome assembly, mapping")
Container(structure, "Structural Modeling", "AlphaFold, docking")
Container(networks, "Networks & Systems", "GRNs, pathways")

Rel(student, bioinfo, "Studies methods to apply them in fields")
Rel(bioinfo, alignment, "Uses")
Rel(bioinfo, ml, "Uses")
Rel(bioinfo, assembly, "Uses")
Rel(bioinfo, structure, "Uses")
Rel(bioinfo, networks, "Uses")

Rel(genomics, alignment, "Uses heavily")
Rel(transcriptomics, alignment, "Uses heavily")
Rel(metagenomics, assembly, "Relies on")
Rel(systems, networks, "Relies on")
Rel(proteomics, structure, "Uses structural predictions")
Rel(proteomics, ml, "Statistical analysis")
```

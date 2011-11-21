---
title: servoPlotter
image: servoplotter.png
category: werkstatt
keyword: servoplotter
---
Der Servoplotter sollte ein Drucker werden, der – im Gegensatz zu üblichen Tintenstrahl- oder Laserdruckern – die Bilder nicht rastert, sondern menschenähnlich mit einem Stift malt.
Mit Hilfe eines selbstgebauten Arms mit Stifthalterung und Servomotorisierung haben wir den ersten Prototypen umgesetzt.
<slide />
Zeichenbewegungen, die mit der Maus auf dem Rechner ausgeführt werden, sollen mittels Motoren auf einen mechanischen Arm übertragen werden.
An diesem Arm befindet sich ein Stift, der die Bewegungen möglichst präzise auf ein Blatt Papier überträgt

Der Prototyp ist mit einem einfachen Metallbaukasten konstruiert worden. Die Servomotoren wurden fest verschraubt und mit Hilfe eines Atmega AVR mit dem benötigen PWM-Steuersignalen versorgt. Über eine serielle Schnittstelle konnten wir die Signale des AVRs verändern.

Bei den Testläufen erwies sich die Metallbaukasten-Konstruktion als zu instabil für präzise Bewegungen, grobe Bewegungen wurden aber gut übertragen und zeigten die Möglichkeiten des Sytems auf.

Fazit:
Die einfache mechanische Konstruktion hat zwar zu dürftigen Zeichenergebnissen geführt, aber gleichzeitig aufgezeigt welches großes Potential in dieser Idee steckt.
Unsere Erkenntnisse beim Bauen des Servoplotters bildeten die Grundlage für die ServoControl.

